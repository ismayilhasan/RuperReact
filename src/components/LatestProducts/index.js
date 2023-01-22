import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import product1 from "../../Assets/Images/product1.jpg";
import product2 from "../../Assets/Images/product2.jpg";
import product3 from "../../Assets/Images/product3.jpg";
import product4 from "../../Assets/Images/product4.jpg";

import "./style.scss";
function LatestProducts() {
  const [isFilled, setIsFilled] = React.useState(true);

  const HandleChangeHeatIcon = () => {
    setIsFilled(!isFilled);
  };
  return (
    <section id="LatestProducts">
      <div className="container">
        <div className="latest-products-heading">
          <h2>Latest Products</h2>
        </div>
        <div className="latest-product-body">
          <Row>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product1} alt="" />
                <i
                  onClick={HandleChangeHeatIcon}
                  className={
                    isFilled
                      ? "fa-regular fa-heart add-wishlist-icon"
                      : "fa-solid fa-heart add-wishlist-icon"
                  }
                ></i>
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product2} alt="" />
                <i
                  onClick={HandleChangeHeatIcon}
                  className={
                    isFilled
                      ? "fa-regular fa-heart add-wishlist-icon"
                      : "fa-solid fa-heart add-wishlist-icon"
                  }
                ></i>
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product3} alt="" />
                <i
                  onClick={HandleChangeHeatIcon}
                  className={
                    isFilled
                      ? "fa-regular fa-heart add-wishlist-icon"
                      : "fa-solid fa-heart add-wishlist-icon"
                  }
                ></i>
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product4} alt="" />
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product1} alt="" />
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product2} alt="" />
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product3} alt="" />
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
            <Col md={3} col={12}>
              <div className="product-box">
                <img className="product-image" src={product4} alt="" />
                <div className="product-box-text">
                  <a className="name">Dining Table</a>
                  <span className="price">150.00</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </Col>
          </Row>
          <button className="loadmore-button">Load more</button>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
