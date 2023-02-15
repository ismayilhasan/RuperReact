import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useBrands from "../../query-hooks/useBrands";
import "./style.scss";
function BrandsForm() {
  const { data: brands, isLoading, isError, isSuccess } = useBrands();
  const {push} = useHistory()

  const updateBrand = (id) => {
   push("/admin/brands/update",id)

  }

  const handleDeleteBrand = (id) => {

    axios.delete(`https://localhost:7216/api/Brands/completelyDelete/${id}`)
      .then(response => {
        console.log('Brand deleted:', response.data);
        // handle successful response
      })
      .catch(error => {
        console.error('Error deleting brand:', error);
        // handle error
      })
    
  };
  return (
    <>
      <div className="admin-heading">
        <div className="container">
          <h1 className="shop-title-heading">Admin</h1>
        </div>
      </div>

      <div class="col-lg-12 grid-margin stretch-card mx-auto mt-5">

        <div class="card">
          <div class="card-body">

            <h4 class="card-title">Brands</h4>
         
            <Link to="/admin/brands/create" className="btn btn-primary">Create</Link>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Operations</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && <p>Loading...</p>}
                  {isError && <p>Could not fetch users</p>}
                  {isSuccess &&
                    brands.map((brand) => (
                      <tr key={brand.id}>
                        <td>
                          <img
                            className="form-image"
                            src={brand.imageName}
                            alt=""
                          />
                        </td>
                        <td>{brand.name}</td>
                        <td >
                            <Link className="btn btn-warning me-2" onClick={() => updateBrand(brand.id)} >Update</Link>
                            <Link onClick={() => handleDeleteBrand(brand.id)} className="btn btn-danger">Delete</Link>
                        </td>
                        <td>
                          <label class="badge badge-success">In Stock</label>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandsForm;
