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
      <i className="fa-solid fa-angle-right arrow-icon"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <i className="fa-solid fa-angle-left arrow-icon"></i>
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
  const { state: stateIdFromProduct } = useLocation();
  const [{ addToCart }] = useAppContext();
  const [productCount, setProductCount] = React.useState(5);
  const [isFilled, setIsFilled] = React.useState(false);
  const [{ addToWishlist }] = useAppContext();
  const [productColors, setProductColors] = React.useState([]);
  const [colorImages, setColorImages] = React.useState([]);
  const [mainImage,setMainImage] = React.useState("")
  const fetchProductColorImages = (images) => {
    setColorImages(images);
    setMainImage(images[0].imageName)
  };
 
  React.useEffect(() => {
    if (isSuccess) {
      setProductColors(productDetailsData.generalProductColors);
      // console.log(productDetailsData.generalProductColors);
      // console.log(productDetailsData.generalProductColors[0].generalProductColorImages);
    
      // setMainImage( productDetailsData.generalProductColors[0].generalProductColorImages[0].imageName)
   
    }
  },[colorImages[0]]);

  const fetchProductDetails = (id) =>
    axios
      .get(`https://localhost:7216/api/Products/${stateIdFromProduct}`)
      .then((response) => response.data);

  const productDetails = useQuery("details", fetchProductDetails);
  const { data: productDetailsData, isSuccess } = useQuery(
    "details",
    fetchProductDetails
  );

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  const handleAddToWishlistClick = (product) => {
    addToWishlist(product);
    setIsFilled(!isFilled);
  };

  const handleSlideChange = (index) => {
    setMainImage(colorImages[index]);
    console.log("te");
  };

  const DecreaseCount = (count) => {
    if (count === 1) {
      return setProductCount(1);
    }
    setProductCount(count - 1);
  };

  const IncreaseCount = (count) => {
    if(count === 100)
    {
      return setProductCount(100)
    }
    setProductCount(count+1)
  };
  // const handler = (id) => {
  //   const filtereImage = images.find(({id}) => id === id)
  //   setArray(filtereImage)
  // }
  console.log();

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
                  <Slider {...settings} afterChange={handleSlideChange}>
                    {colorImages.map((image) => (
                      <div className="slide-image">
                        <img src={image.imageName} alt="" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div
                  style={{ backgroundImage: "Url(" + mainImage + ")"}}
                  
                  className="product-image"
                ></div>
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
                        (3<span>reviews</span>)
                      </div>
                    </div>
                    <div className="description">
                      <p>{productDetailsData.description}</p>
                    </div>
                    <div className="color">
                      <h5>Color :</h5>
                      <div className="colors">
                        {productDetailsData.generalProductColors.map(
                          ({ id, colorCode, generalProductColorImages}) => (
                            <span key={id}
                              onClick={() =>
                                fetchProductColorImages(
                                  generalProductColorImages
                                )
                              }
                              style={{ background: colorCode }}
                            ></span>
                          )
                        )}
                      </div>
                    </div>
                    <div className="buttons">
                      <div className="quantity">
                      <button
                          onClick={() => IncreaseCount(productCount)}
                          className="plus"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <span className="quantity">{productCount}</span>
                        <button
                          onClick={() => DecreaseCount(productCount)}
                          className="minus"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      </div>
                      <div
                        onClick={() => handleAddToCartClick(productDetailsData)}
                        className="btn-add-to-cart"
                      >
                        <a href="#" className="button">
                          Add to cart
                        </a>
                      </div>
                      <div className="btn-quick-buy">
                        <button className="buy-btn">Buy It Now</button>
                      </div>
                      <div className="btn-wishlist" data-title="Wishlist">
                        <button
                          onClick={() =>
                            handleAddToWishlistClick(productDetailsData)
                          }
                          className="product-btn"
                        >
                          <i
                            className={
                              isFilled
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"
                            }
                          ></i>
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                    <div className="meta">
                      {productDetailsData.generalProductColors.find(x => x.id === productDetailsData.id)}
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
