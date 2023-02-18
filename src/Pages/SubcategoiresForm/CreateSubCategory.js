import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import useCategories from "../../query-hooks/useCategoires";

function CreateSubCategory() {
  const [subcategoryName, setSubcategoryName] = React.useState("");
  const [subcategoryImage, setSubcategoryImage] = React.useState(null);
  const [categoryId, setCategoryId] = React.useState(1);
  const { data: categoires, isLoading, isSuccess, isError } = useCategories();
  const { push } = useHistory();
  const handleSelectChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", subcategoryName);
    formData.append("image", subcategoryImage);
    formData.append("categoryId", categoryId);

    try {
      const response = await axios.post(
        "https://localhost:7216/api/SubCategories",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      push("/admin/subcategory");
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    setSubcategoryImage(event.target.files[0]);
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
                <label for="exampleInputUsername1">Sub Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Category Name"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
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
              <div className="form-group">
                <label style={{ display: "block" }}>Category Image</label>
                <select
                  value={categoryId}
                  onChange={handleSelectChange}
                  className="w-100 p-3"
                >
                  {isLoading && <p>Loading...</p>}
                  {isError && <p>cant fetch data...</p>}
                  {isSuccess &&
                    categoires.map((category) => (
                      <option value={category.id} key={category.id}>
                        {category.name}
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
  );
}

export default CreateSubCategory;
