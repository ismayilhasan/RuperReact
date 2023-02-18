import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function CreateColor() {
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const { state: ColorId } = useLocation();

  const handleput = (event) => {
    event.preventDefault();
    const id = ColorId;
    const formData = new FormData();
    formData.append("id", ColorId);
    formData.append("name", colorName);
    formData.append("code", colorCode);
    axios
      .post(`https://localhost:7216/api/Categories/${id}`, formData)

      .then((response) => {
        console.log("Category updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
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
            <form className="forms-sample" onSubmit={handleput}>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Color Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Color Code</label>
                <input
                  className="form-control"
                  type="text"
                  value={colorCode}
                  onChange={(e) => setColorCode(e.target.value)}
                />
              </div>

              <button type="sumbit" className="btn btn-primary">
                Create Color
              </button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateColor;
