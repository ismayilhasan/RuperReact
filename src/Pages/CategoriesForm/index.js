import axios from 'axios';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import useCategories from '../../query-hooks/useCategoires';

function CategoriesForm() {
    const { data: categories, isLoading, isError, isSuccess } = useCategories();
    const {push} = useHistory()
    const updateCategory = (id) => {
        push("/admin/category/update",id)
     
       }
    const handleDeleteBrand = (id) => {

      console.log(id);
      

        axios.delete(`https://localhost:7216/api/Categories/completelyDelete/${id}`)
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
 
    <Link to="/admin/category/create" className="btn btn-primary">Create</Link>
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
            categories.map((category) => (
              <tr key={category.id}>
                <td>
                  <img
                    className="form-image"
                    src={category.imageName}
                    alt=""
                  />
                </td>
                <td>{category.name}</td>
                <td >
                    <Link className="btn btn-warning me-2"  onClick={() => updateCategory(category.id)} >Update</Link>
                    <Link onClick={() => handleDeleteBrand(category.id)} className="btn btn-danger">Delete</Link>
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
  )
}

export default CategoriesForm