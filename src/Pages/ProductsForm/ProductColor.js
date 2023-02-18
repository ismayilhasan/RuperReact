import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import useColors from "../../query-hooks/getColor";
import useProducts from "../../query-hooks/useProducts";

function ProductColor() {
  const [productId, setProductId] = React.useState(0);
  const [colorId, setColorId] = React.useState();
  const [quantity, setQuantity] = React.useState(0);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const { push } = useHistory();
  const products = useProducts();
  const colors = useColors();

  const handleSelectProductChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSelectColorChange = (event) => {
    setColorId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("colorId", colorId);
    formData.append("quantity", quantity);
    formData.append("isDeleted", isDeleted);

    try {
      const response = await axios.post(
        "https://localhost:7216/api/ProductColors",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      push("/admin/products");
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
                <label>Quantity</label>
                <input
                  className="my-4 w-100 text-center"
                  type="number"
                  min={0}
                  value={quantity}
                  onChange={(event) => setQuantity(+event.target.value)}
                />
              </div>
              <div className="form-group">
                <label style={{ display: "block" }}>Select Product</label>
                <select
                  value={productId}
                  onChange={handleSelectProductChange}
                  className="w-100 p-3"
                >
                  {products.isLoading && <p>Loading...</p>}
                  {products.isError && <p>cant fetch data...</p>}
                  {products.isSuccess &&
                    products.data.map((product) => (
                      <option value={product.id} key={product.id}>
                        {product.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label style={{ display: "block" }}>Select Color</label>
                <select
                  value={colorId}
                  onChange={handleSelectColorChange}
                  className="w-100 p-3"
                >
                  {colors.isLoading && <p>Loading...</p>}
                  {colors.isError && <p>cant fetch data...</p>}
                  {colors.isSuccess &&
                    colors.data.map((color) => (
                      <option value={color.id} key={color.id}>
                        {color.colorName}
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

export default ProductColor;
