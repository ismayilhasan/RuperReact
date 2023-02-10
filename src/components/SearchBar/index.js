import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAppContext } from "../../context/App";
import useProducts from "../../query-hooks/useProducts";
import { useHistory } from "react-router-dom";
import "./style.scss";
function SearchBar() {
  const [{ searchbar, toggleSearchbar }] = useAppContext();
  const {data:products,isSuccess,isLoading,isError} = useProducts();
  const [seacrh,setSearch] = React.useState('')
  const history = useHistory();
  const [commonProducts,setCommonProducts] = React.useState([])

    React.useEffect(() => {

    })

  const getProductDetails = (id) => {
    history.push("/details", id);
  };


  return (
    <div className={searchbar ? "searchbar searchbar--open" : "searchbar"}>
      <div class="search-box">
        <input
          type="text"
          class="search-txt"
          name=""
          placeholder="Write here ..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <a href="#" class="search-btn">
        <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>
      <i
        className="fa-solid fa-xmark close-icon-searchbar"
        onClick={toggleSearchbar}
      ></i>

        <div className="products">
        <Row>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Could not fetch users</p>}
            {isSuccess &&
              products.filter((item) => {
                return seacrh.toLowerCase() === '' ? null : item.name
                .toLowerCase().includes(seacrh)
              }).map((product) => (
                <Col key={product.id} md={3} col={12}>
                <div className="product-box">
                  <img
                    onClick={() => getProductDetails(product.id)}
                    className="product-image"
                    src={product.imageName}
                    alt=""
                  />
               
                  <div className="product-box-text">
                    <a className="name">{product.name}</a>
                    <span className="price">${product.price}</span>
                   
                  </div>
                </div>
              </Col>
              ))}
            </Row>
        </div>
            
      
    </div>
  );
}

export default SearchBar;
