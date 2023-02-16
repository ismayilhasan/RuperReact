import axios from 'axios';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

function UpdateSlider() {
    const [slideTitle, SetSliderTitle] = React.useState("");
  const [slideSubTitle, SetSliderSubTitle] = React.useState("");
  const [sliderImage, setSliderImage] = React.useState(null);
  const [sliderButtonName, setSliderButtonName] = React.useState("");
  const [sliderButtonLink, setSliderButtonLink] = React.useState("");
  const {state:SliderId} = useLocation()
  const {push} = useHistory()

  const handleput = (event) => {
      event.preventDefault();
      const id = SliderId; 
      const updatedCategory = new FormData();
      updatedCategory.append('id', SliderId);
      updatedCategory.append('title', slideTitle);
      updatedCategory.append('subtitle', slideSubTitle);
      updatedCategory.append('image', sliderImage);
      updatedCategory.append('sliderButtonName', sliderButtonName);
      updatedCategory.append('sliderButtonLink', sliderButtonLink);
      axios.put(`https://localhost:7216/api/Sliders/${id}`,updatedCategory)
    .then(response => {
      console.log('Category updated:', response.data);
      push("/admin/slider")
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
                <label for="exampleInputUsername1"> Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write title here..."
                  value={slideTitle}
                  onChange={(e) => SetSliderTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputUsername1"> Sub Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write sub title here..."
                  value={slideSubTitle}
                  onChange={(e) => SetSliderSubTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputUsername1"> Button Text</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write button text here..."
                  value={sliderButtonName}
                  onChange={(e) => setSliderButtonName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputUsername1"> Button Text</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write button link here..."
                  value={sliderButtonLink}
                  onChange={(e) => setSliderButtonLink(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Sub Category Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  onChange={e => setSliderImage(e.target.files[0])}
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
  )
}

export default UpdateSlider