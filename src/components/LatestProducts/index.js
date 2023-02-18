import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import useProducts from "../../query-hooks/useProducts";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/App";

import "./style.scss";

// Product Components

function Product({product}){
  const [{ addToCart }] = useAppContext();
  const [{ addToWishlist }] = useAppContext();
  const [isFilled, setIsFilled] = React.useState(true);
  const history = useHistory();
  const {isSuccess} = useProducts();

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  const handleAddToWishlistClick = (product) => {
    addToWishlist(product);
    setIsFilled(!isFilled)
  };
  
  const getProductDetails = (id) => {
    history.push("/details", id);
    
    
  };

  React.useEffect(() => {
    if(isSuccess)
    {
      // product.generalProductColors.map(({generalProductColorImages}) => {
      //   setMainImages(...mainImages,generalProductColorImages[0])
      // })
    }
  
  })


  return(
    <Col key={product.id} md={3} col={12}>
    <div className="product-box">
      <img
        onClick={() => getProductDetails(product.id)}
        className="product-image"
        src={product.imageName}
        alt=""
      />
      <i
        onClick={() => handleAddToWishlistClick(product)}
        className={
          isFilled
            ? "fa-regular fa-heart add-wishlist-icon"
            : "fa-solid fa-heart add-wishlist-icon"
        }
      ></i>
      <div className="product-box-text">
        <a className="name">{product.name}</a>
        <span className="price">${product.price}</span>
        <button onClick={() => handleAddToCartClick(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  </Col>
  )
}



// Latest Product Section
function LatestProducts() {
  const { data: productList } = useProducts();
  const products = useProducts();
  
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
              products.data.slice(productList.length - 4).map((product) => (
                <Product product={product}/>
              ))}
          </Row>
          <button className="loadmore-button">Load more</button>
        </div>
      </div>

    </section>

    
  );
}

export default LatestProducts;
