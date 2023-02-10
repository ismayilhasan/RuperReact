import React from "react";
import "./style.scss";
import product2 from "../../Assets/Images/product2.jpg";
import { useAppContext } from "../../context/App";
function Wishlist() {
  const [{ wishlistCart,setWishlistCart }] = useAppContext();
  const [{ addToCart }] = useAppContext();

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  const deleteProduct = (id) => {
    const newWishlistCart = wishlistCart.filter(product => (product.id !==  id))
    setWishlistCart(newWishlistCart)
  }

  return (
    <>
      <div className="wishlist-heading">
        <div className="container">
          <h1 className="shop-title-heading">Wishlist</h1>
        </div>
      </div>

      <section id="Wishlist">
        <div className="container">
          <table className="table table-bordered">
            <tbody>
              {wishlistCart.map((product) => (
                <tr key={product.id}>
                  <td className="delete-row" scope="row">
                    <i onClick={() => deleteProduct(product.id)} className="fa-solid fa-xmark delete-button"></i>
                  </td>
                  <td className="image-row">
                    <img className="product-image" src={product.imageName} alt="" />
                  </td>
                  <td className="name-price-image-date-row">
                    <a href="">{product.name}</a>
                    <span>${product.price}</span>
                    <div className="wishlist-item-time">June 6, 2022</div>
                  </td>
                  <td className="button-row">
                    <div className="button-row-all">
                      <div className="in-stock">In stock</div>
                      <a
                        onClick={() => handleAddToCartClick(product)}
                        className="add-to-cart"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
