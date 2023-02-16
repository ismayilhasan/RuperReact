import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

function CreateSlider() {
  const [slideTitle, SetSliderTitle] = React.useState("");
  const [slideSubTitle, SetSliderSubTitle] = React.useState("");
  const [sliderImage, setSliderImage] = React.useState(null);
  const [sliderButtonName, setSliderButtonName] = React.useState("");
  const [sliderButtonLink, setSliderButtonLink] = React.useState("");
  const { push } = useHistory();

  const handleImageChange = (event) => {
    setSliderImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", slideTitle);
    formData.append("subtitle", slideSubTitle);
    formData.append("image", sliderImage);
    formData.append("buttonName", sliderButtonName);
    formData.append("buttonLink", sliderButtonLink);

    try {
      const response = await axios.post(
        "https://localhost:7216/api/Sliders",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      push("/admin/slider");
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

export default CreateSlider;
