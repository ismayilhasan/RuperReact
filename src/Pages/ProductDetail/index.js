import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from "../../Assets/Images/product1.jpg";
import { useAppContext } from "../../context/App";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <i class="fa-solid fa-angle-right arrow-icon"></i>
    </div>
  

  );
}

function PrevArrow(props) {
  const {  onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <i class="fa-solid fa-angle-left arrow-icon"></i>
    </div>
  );
}

function ProductDetail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // vertical: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const [array, setArray] = React.useState([]);
  const [starCount, setStarCount] = React.useState([]);
  const { state: stateIdFromProduct } = useLocation();
  const [{addToCart}] = useAppContext();
  const fetchProductDetails = (id) =>
    axios
      .get(`https://localhost:7216/api/Products/${stateIdFromProduct}`)
      .then((response) => response.data);

  const productDetails = useQuery("details", fetchProductDetails);
  const { data: productDetailsData } = useQuery("details", fetchProductDetails);

  const handleAddToCartClick = (product) => {
    addToCart(product);
};
  

  return (
    <>
      <div className="detail-heading">
        <div className="container">
          <h1 className="shop-title-heading">Product Detail</h1>
        </div>
      </div>

      {productDetails.isLoading && <p>Loading...</p>}
      {productDetails.isError && <p>Could not fetch users</p>}
      {productDetails.isSuccess && (
        <section id="DetailHeading">
          <div className="container">
          
            <Row>
              
              <Col md={6}>
              <div className="main-slider">
              <Slider {...settings}>
                <div className="slide-image">
                  <img src={product1} alt="" />
                </div>
                <div className="slide-image">
                  <img src={product1} alt="" />
                </div>
                <div className="slide-image"> 
                  <img src={product1} alt="" />
                </div>
                <div className="slide-image"> 
                  <img src={product1} alt="" />
                </div>
              </Slider>
            </div>
                <div className="product-image"></div>
              </Col>
              <Col md={6}>
                <div className="product-info">
                  <h1 className="title">{productDetailsData.name}</h1>
                  <div className="price">
                    {/* Burda Del var idi Sildim ! */}
                    <span className="real-pice">
                      Price : {productDetailsData.price}$
                    </span>

                    <ins>
                      <span className="discount">
                        {productDetailsData.discount}
                      </span>
                    </ins>
                    <div className="rating">
                      <div className="star star-5">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="review-count">
                        (3<span> reviews</span>)
                      </div>
                    </div>
                    <div className="description">
                      <p>{productDetailsData.description}</p>
                    </div>
                    <div className="color">
                      <h5>Color :</h5>
                      <div className="colors">
                        {console.log(productDetailsData)}
                        <span className="color1"></span>
                        <span className="color2"></span>
                        <span className="color3"></span>
                      </div>
                    </div>
                    <div className="buttons">
                      <div className="quantity">
                        <button className="plus">
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <input
                          min="0"
                          max="3"
                          name="quantity"
                          inputMode="numeric"
                        />
                        <button className="minus">
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                      <div onClick={() => handleAddToCartClick(productDetailsData)} className="btn-add-to-cart">
                        <a href="#" className="button">
                          Add to cart
                        </a>
                      </div>
                      <div className="btn-quick-buy">
                        <button className="buy-btn">Buy It Now</button>
                      </div>
                      <div className="btn-wishlist" data-title="Wishlist">
                        <button className="product-btn">
                          <i className="fa-regular fa-heart"></i>
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                    <div className="meta">
                      <span className="sku">
                        SKU: <span className="sku">D2300-3-2-2</span>
                      </span>
                      <span className="category">
                        Category:
                        <a href="shop-grid-left.html" rel="tag">
                          {productDetailsData.categoryName}
                        </a>
                      </span>
                      <span className="tags">
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
      )}
    </>
  );
}

export default ProductDetail;
