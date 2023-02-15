import axios from 'axios';
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import useSubCategoires from '../../query-hooks/getSubCategoires';

function SubcategoriesForm() {
  const { data: Subcategories, isLoading, isError, isSuccess } = useSubCategoires();
  const {push} = useHistory()

  const updateSubCategory = (id) => {
   push("/admin/subcategory/update",id)

  }

  const handleDeleteSubcategory = (id) => {

    axios.delete(`https://localhost:7216/api/SubCategories/completelyDelete/${id}`)
      .then(response => {
        console.log('SubCategory deleted:', response.data);
        // handle successful response
      })
      .catch(error => {
        console.error('Error deleting SubCategory:', error);
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

            <h4 class="card-title">Sub Categories</h4>
         
            <Link to="/admin/subcategory/create" className="btn btn-primary">Create</Link>
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
                    Subcategories.map((subcategory) => (
                      <tr key={subcategory.id}>
                        <td>
                          <img
                            className="form-image"
                            src={subcategory.imageName}
                            alt=""
                          />
                        </td>
                        <td>{subcategory.name}</td>
                        <td >
                            <Link className="btn btn-warning me-2" onClick={() => updateSubCategory(subcategory.id)} >Update</Link>
                            <Link onClick={() => handleDeleteSubcategory(subcategory.id)} className="btn btn-danger">Delete</Link>
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

export default SubcategoriesForm