import axios from "axios";
import React from "react";

function CreateCategory() {
  const [categoryName, setCategoryName] = React.useState("");
  const [categoryImage, setCategoryImage] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("image", categoryImage);

    try {
      const response = await axios.post(
        "https://localhost:7216/api/Categories",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    setCategoryImage(event.target.files[0]);
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
            <p class="card-description">Basic form layout</p>
            <form class="forms-sample" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputUsername1">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Category Image</label>
                <input
                  type="file"
                  class="form-control"
                  id="image"
                  onChange={handleImageChange}
                />
              </div>

              <button type="submit" class="btn btn-primary mr-2">
                Submit
              </button>
              <button class="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCategory;
