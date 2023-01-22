import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import product2 from '../../Assets/Images/product2.jpg'
import useBrands from "../../query-hooks/useBrands";
import axios from "axios";
function ProductDetail() {

  return (
    <>
      <div className="detail-heading">
        <div className="container">
          <h1 className="shop-title-heading">Product Detail</h1>
        </div>
      </div>

      <section id="DetailHeading">
        <div className="container">
          <Row>
            <Col md={6}>
              <div className="product-image">
              </div>
            </Col>
            <Col md={6}>
              <div className="product-info">
                <h1 class="title">Bora Armchair</h1>
                <div className="price">
                  <del>
                    <span className="real-pice">$100.00</span>
                  </del>
                  <ins>
                    <span className="discount">$90.00</span>
                  </ins>
                  <div class="rating">
                    <div class="star star-5">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="review-count">
                      (3<span> reviews</span>)
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="color">
                    <h5>Color :</h5>
                    <div className="colors">
                      <span className="color1"></span>
                      <span className="color2"></span>
                      <span className="color3"></span>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="quantity">
                      <button className="plus">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                      <input
                        min="0"
                        max=""
                        name="quantity"
                        value="1"
                        size="4"
                        inputmode="numeric"
                        autocomplete="off"
                      />
                      <button className="minus">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <div className="btn-add-to-cart">
                      <a href="#" class="button" tabindex="0">
                        Add to cart
                      </a>
                    </div>
                    <div className="btn-quick-buy">
                      <button className="buy-btn">Buy It Now</button>
                    </div>
                    <div class="btn-wishlist" data-title="Wishlist">
                      <button class="product-btn">
                        <i class="fa-regular fa-heart"></i>
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                  <div class="meta">
                    <span class="sku">
                      SKU: <span class="sku">D2300-3-2-2</span>
                    </span>
                    <span class="category">
                      Category:
                      <a href="shop-grid-left.html" rel="tag">
                        Furniture
                      </a>
                    </span>
                    <span class="tags">
                      Tags:
                      <a href="shop-grid-left.html" rel="tag">
                        Hot
                      </a>
                      ,
                      <a href="shop-grid-left.html" rel="tag">
                        Trend
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
