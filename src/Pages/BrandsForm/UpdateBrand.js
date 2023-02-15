import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './style.scss'
function UpdateBrand() {
    const [brandName, setBrandName] = useState('');
    const [brandImage, setBrandImage] = useState(null);
    const {state:brandId} = useLocation()
   
    const handleUpdateBrand = (event) => {
        event.preventDefault();
        const updatedBrand = new FormData();
        updatedBrand.append('id', brandId);
        updatedBrand.append('name', brandName);
        updatedBrand.append('image', brandImage);
        axios.put(`https://localhost:7216/api/Brands/${brandId}`,updatedBrand)
      .then(response => {
        console.log('Brand deleted:', response.data);
      })
      .catch(error => {
        console.error('Error deleting brand:', error);
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
            <form className="forms-sample" onSubmit={handleUpdateBrand}>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Brand Name</label>
                <input className="form-control" type="text" value={brandName} onChange={e => setBrandName(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="file" onChange={e => setBrandImage(e.target.files[0])} />
              </div>

              <button type="sumbit" className="btn btn-primary">Update Brand</button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBrand;
