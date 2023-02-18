import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useColors from "../../query-hooks/getColor";

function ColorsForm() {
  const { data: colors, isLoading, isError, isSuccess } = useColors();
  const { push } = useHistory();

  const updateColor = (id) => {
    push("/admin/color/update", id);
  };

  const handleDeleteColor = (id) => {
    axios
      .delete(`https://localhost:7216/api/Colors/completelyDelete/${id}`)
      .then((response) => {
        console.log("Brand deleted:", response.data);
        // handle successful response
      })
      .catch((error) => {
        console.error("Error deleting brand:", error);
        // handle error
      });
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

            <Link to="/admin/colors/create" className="btn btn-primary">
              Create
            </Link>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Color Codes</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && <p>Loading...</p>}
                  {isError && <p>Could not fetch users</p>}
                  {isSuccess &&
                    colors.map((color) => (
                      <tr key={color.id}>
                        <td>{color.colorName}</td>
                        <td>{color.colorCode}</td>
                        <td>
                          <Link
                            className="btn btn-warning me-2"
                            onClick={() => updateColor(color.id)}
                          >
                            Update
                          </Link>
                          <Link
                            onClick={() => handleDeleteColor(color.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </Link>
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
  );
}

export default ColorsForm;
