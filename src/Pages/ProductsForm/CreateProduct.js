import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import useSubCategoires from '../../query-hooks/getSubCategoires';
import useBrands from '../../query-hooks/useBrands';

function CreateProduct() {
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

    const handleSelectSubaCategoryChange = (event) => {
        setSubCategoryId(event.target.value)
    
    }


      const handleSelectBrandChange = (event) => {
        setBrandId(event.target.value)
    
      }

      
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("name", productName);
        formData.append("description", productDescription);
        formData.append("price", productPrice);
        formData.append("subcategoryId",subCategoryId)
        formData.append("brandId",brandId)
        formData.append("isDeleted",isDeleted)
        formData.append("discount",disCount)
        
        try {
          const response = await axios.post(
            "https://localhost:7216/api/Products",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          push("/admin/products")
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
                <textarea type="text"
                  className="form-control"
                  placeholder="Enter Product Description"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)} rows="10" cols="10"></textarea>
              
              </div>
              <div className="form-group">
                <label for="exampleInputUsername1">Price</label>
                <input className='my-4 w-100 text-center' type="number" min={0}  value={productPrice} onChange={(event) => SetProuctPrice(+event.target.value)}/>
              
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
  )
}

export default CreateProduct