import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import useProductColors from "../../query-hooks/getProductColor";

function ProductColorImages() {
  const productColors = useProductColors();
  const [productColorImages, setProductColorImages] = React.useState();
  const [productColorId,setProductColorId] = React.useState();
  const {push}= useHistory();

  const handleImageChange = (event) => {
    setProductColorImages(event.target.files);
  };

  const handleSelectChange = (event) => {
    setProductColorId(event.target.value)

  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("id", productColorId);
    formData.append("images", productColorImages);
    
    try {
      const response = await axios.post(

        "https://localhost:7216/api/ProductColors",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      push("/admin/products");
    } catch (error) {
      console.error(error);
    }
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
            <form className="forms-sample" onSubmit={handleSubmit}>
            

              <div className="form-group">
                <label style={{ display: "block" }}>Select Product</label>
                <select
                  value={productColorId}
                  onChange={handleSelectChange}
                  className="w-100 p-3"
                >
                  {productColors.isLoading && <p>Loading...</p>}
                  {productColors.isError && <p>cant fetch data...</p>}
                  {productColors.isSuccess &&
                    productColors.data.map((productColor) => (
                  
                      <option value={productColor.id} key={productColor.id}>
                        {productColor.productName} {productColor.colorName} {      console.log(productColor)}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label>Product Color Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  multiple 
                  onChange={handleImageChange}
                />
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

export default ProductColorImages;
