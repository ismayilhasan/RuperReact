import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import product1 from "../../Assets/Images/product1.jpg";
import useProducts from "../../query-hooks/useProducts";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/App";

function LatestProducts() {
  const [{addToCart}] = useAppContext();
  const [isFilled, setIsFilled] = React.useState(true);
  const {data : productList} = useProducts()
  const products = useProducts();
  const history = useHistory();


  const handleAddToCartClick = (product) => {
      addToCart(product);
  };

  const getProductDetails = (id) => {
    history.push("/details",id)
  }



  return (
    <section id="LatestProducts">
      <div className="container">
        <div className="latest-products-heading">
          <h2>Latest Products</h2>
        </div>
        <div className="latest-product-body">
          <Row>
            {products.isLoading && <p>Loading...</p>}
            {products.isError && <p>Could not fetch users</p>}
            {products.isSuccess &&
              products.data.slice(productList.length - 2).map((product) => (
                <Col key={product.id} md={3} col={12}>
                  <div className="product-box">
                    <img onClick={() => getProductDetails(product.id)} className="product-image" src={product1} alt="" />
                    <i
                      onClick={() => setIsFilled(!isFilled)}
                      className={
                        isFilled
                          ? "fa-regular fa-heart add-wishlist-icon"
                          : "fa-solid fa-heart add-wishlist-icon"
                      }
                    ></i>
                    <div className="product-box-text">
                      <a className="name">{product.name}</a>
                      <span className="price">${product.price}</span>
                      <button onClick= {() => handleAddToCartClick(product)}>Add to Cart</button>
                    </div>
                  </div>
                </Col>
              ))}
            {/* <Col md={3} col={12}>
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
            </Col> */}
          </Row>
          <button className="loadmore-button">Load more</button>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
