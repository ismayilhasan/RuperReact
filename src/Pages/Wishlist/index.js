import React from "react";
import "./style.scss";
import product2 from "../../Assets/Images/product2.jpg";
function Wishlist() {
  return (
    <>
      <div className="wishlist-heading">
        <div className="container">
          <h1 className="shop-title-heading">Wishlist</h1>
        </div>
      </div>

      <section id="Wishlist">
        <div className="container">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td className="delete-row" scope="row">
                  <i class="fa-solid fa-xmark delete-button"></i>
                </td>
                <td className="image-row">
                  <img className="product-image" src={product2} alt="" />
                </td>
                <td className="name-price-image-date-row">
                  <a href="">Chair Oak Matt Lacquered</a>
                  <span>$150.00</span>
                  <div class="wishlist-item-time">June 6, 2022</div>
                </td>
                <td className="button-row">
                  <div className="button-row-all">
                  <div className="in-stock">In stock</div>
                  <a className="add-to-cart">Add to Cart</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="delete-row" scope="row">
                  <i class="fa-solid fa-xmark delete-button"></i>
                </td>
                <td className="image-row">
                  <img className="product-image" src={product2} alt="" />
                </td>
                <td className="name-price-image-date-row">
                  <a href="">Chair Oak Matt Lacquered</a>
                  <span>$150.00</span>
                  <div class="wishlist-item-time">June 6, 2022</div>
                </td>
                <td className="button-row">
                  <div className="button-row-all">
                  <div className="in-stock">In stock</div>
                  <a className="add-to-cart">Add to Cart</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="delete-row" scope="row">
                  <i class="fa-solid fa-xmark delete-button"></i>
                </td>
                <td className="image-row">
                  <img className="product-image" src={product2} alt="" />
                </td>
                <td className="name-price-image-date-row">
                  <a href="">Chair Oak Matt Lacquered</a>
                  <span>$150.00</span>
                  <div class="wishlist-item-time">June 6, 2022</div>
                </td>
                <td className="button-row">
                  <div className="button-row-all">
                  <div className="in-stock">In stock</div>
                  <a className="add-to-cart">Add to Cart</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Wishlist;
