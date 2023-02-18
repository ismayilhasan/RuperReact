import axios from "axios";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import useSubCategoires from "../../query-hooks/getSubCategoires";
import useBrands from "../../query-hooks/useBrands";

function UpdateProduct() {
  const [productName,setProductName]  = React.useState("");
  const [productDescription,setProductDescription] = React.useState("")
  const [productPrice,SetProuctPrice]  = React.useState(0);
  const [isDeleted,setIsDeleted] = React.useState(false);
  const [brandId,setBrandId] = React.useState(0);
  const [subCategoryId,setSubCategoryId] = React.useState(0);
  const [disCount,setDisCount] = React.useState(0)
  const {push} = useHistory();
  const subCategoires = useSubCategoires();
  const brands = useBrands();
  const { state: ProductId } = useLocation();
  const [rate,setRate] = React.useState(0)

  const handleSelectSubaCategoryChange = (event) => {
    setBrandId(event.target.value)

}


  const handleSelectBrandChange = (event) => {
    setSubCategoryId(event.target.value)

  }

  const handleput = (event) => {
    event.preventDefault();
    const id = ProductId;
    const updatedProduct = new FormData();
    updatedProduct.append('id', ProductId);
    updatedProduct.append('name', productName);
    updatedProduct.append('description', productDescription);
    updatedProduct.append('price', productPrice);
    updatedProduct.append('discount', disCount);
    updatedProduct.append('rate', rate);
    updatedProduct.append('isDeleted', isDeleted);
    updatedProduct.append('brandId', brandId);
    updatedProduct.append('subCategory', subCategoryId);

    axios
      .put(`https://localhost:7216/api/Products/${id}`, updatedProduct)
      .then((response) => {
        console.log("Product updated:", response.data);
        push("/admin/products");
      })
      .catch((error) => {
        console.error("Error updating Product:", error);
      });
  };
  return (
    <>
      <div className="admin-heading">
        <div className="container">
          <h1 className="shop-title-heading">Admin</h1>
        </div>
      </div>

      <div className="col-md-6 mx-auto mt-5 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Default form</h4>
            <p className="card-description">Basic form layout</p>
            <form className="forms-sample" onSubmit={handleput}>
              <div className="form-group">
                <label for="exampleInputUsername1">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputUsername1">Description Name</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Description"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  rows="10"
                  cols="10"
                ></textarea>
              </div>
              <div className="form-group">
                <label for="exampleInputUsername1">Price</label>
                <input
                  className="my-4 w-100 text-center"
                  type="number"
                  min={0}
                  value={productPrice}
                  onChange={(event) => SetProuctPrice(+event.target.value)}
                />
              </div>
              <div className="form-group">
                <label style={{ display: "block" }}>Select Sub Category</label>
                <select
                  value={subCategoryId}
                  onChange={handleSelectSubaCategoryChange}
                  className="w-100 p-3"
                >
                  {subCategoires.isLoading && <p>Loading...</p>}
                  {subCategoires.isError && <p>cant fetch data...</p>}
                  {subCategoires.isSuccess &&
                    subCategoires.data.map((subCategory) => (
                      <option value={subCategory.id} key={subCategory.id}>
                        {subCategory.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label style={{ display: "block" }}>Select Brand</label>
                <select
                  value={brandId}
                  onChange={handleSelectBrandChange}
                  className="w-100 p-3"
                >
                  {brands.isLoading && <p>Loading...</p>}
                  {brands.isError && <p>cant fetch data...</p>}
                  {brands.isSuccess &&
                    brands.data.map((brand) => (
                      <option value={brand.id} key={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
