import axios from 'axios';
import React from 'react'

function CreateBrand() {
    const [brandName, setBrandName] = React.useState('');
    const [brandImage, setBrandImage] = React.useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('name', brandName);
        formData.append('image', brandImage);
    
        try {
          const response = await axios.post('https://localhost:7216/api/brands', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleImageChange = (event) => {
        setBrandImage(event.target.files[0]);
      };
    
      


  return (
    <>
    <div className="admin-heading">
        <div className="container">
          <h1 className="shop-title-heading">Admin</h1>
        </div>
      </div>

            <div class="col-md-6 mx-auto mt-5 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Default form</h4>
                  <p class="card-description">
                    Basic form layout
                  </p>
                  <form class="forms-sample" onSubmit={handleSubmit}>
                    <div class="form-group">
                      <label for="exampleInputUsername1">Brand Name</label>
                      <input type="text" class="form-control"  placeholder="Enter Brand Name"  value={brandName} onChange={e => setBrandName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Brand Image</label>
                      <input type="file" class="form-control" id="image" onChange={handleImageChange} />
                    </div>
               
                  
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
    </>
  )
}

export default CreateBrand