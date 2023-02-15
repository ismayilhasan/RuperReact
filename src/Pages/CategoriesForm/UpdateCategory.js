import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateCategory() {
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState(null);
    const {state:CategoryId} = useLocation()
   
    const handleput = (event) => {
      console.log(CategoryId);
        event.preventDefault();
        const id = CategoryId; 
        const updatedCategory = new FormData();
        updatedCategory.append('id', CategoryId);
        updatedCategory.append('name', categoryName);
        updatedCategory.append('image', categoryImage);
        axios.put(`https://localhost:7216/api/Categories/${id}`,updatedCategory)
      .then(response => {
        console.log('Category updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating category:', error);
      })

      
    }
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
              <label htmlFor="exampleInputUsername1">Category Name</label>
              <input className="form-control" type="text" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="file" onChange={e => setCategoryImage(e.target.files[0])} />
            </div>

            <button type="sumbit" className="btn btn-primary">Update Category</button>
            <button className="btn btn-light">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default UpdateCategory