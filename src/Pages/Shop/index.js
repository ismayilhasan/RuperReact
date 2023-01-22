import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import product1 from "../../Assets/Images/product1.jpg";
import product2 from "../../Assets/Images/product2.jpg";
import product3 from "../../Assets/Images/product3.jpg";
import product4 from "../../Assets/Images/product4.jpg";
import useBrands from "../../query-hooks/useBrands";
import useCategories from "../../query-hooks/useCategoires";
function Shop() {
  const brands = useBrands();
  const { data: CategoriesData } = useCategories();
  const categoires = useCategories();
  return (
    <>
      <div className="shop-heading">
        <div className="container">
          <h1 className="shop-title-heading">Shop</h1>
        </div>
      </div>
      <section id="ShopBody">
        <div className="container">
          <Row>
            <Col md={3}>
              <div className="left-filter-area">
                <div className="filter-categories">
                  <div className="filter-categories-heading">
                    <h2>Categories</h2>
                  </div>
                  <div className="filter-categoires-body">
                    <ul>
                      <li>
                        {categoires.isLoading && <p>Loading...</p>}
                        {categoires.isError && <p>Could not fetch users</p>}
                        {categoires.isSuccess &&
                          CategoriesData.map((category) => (
                            <a key={category.id} href="shop-grid-left.html">
                              {category.name} <span className="count">9</span>
                            </a>
                          ))}

                
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="filter-brand-">
                  <div className="filter-brand-heading">
                    <h2>Brand</h2>
                  </div>
                  <div className="filter-brand-body">
                    {brands.isLoading && <p>Loading...</p>}
                    {brands.isError && <p>Could not fetch users</p>}
                    {brands.isSuccess &&
                      brands.data.map((brand) => (
                        <img src={brand.imageName} alt="d" />
                      ))}
                
                  </div>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className="products-top">
                <div className="text">Showing all 21 results</div>
                <select>
                  <option data-display="Select">Default Sorting</option>
                  <option value="1">Sort by Price : Low to High</option>
                  <option value="2">Sort by Price : High to Low</option>
                  <option value="3" disabled>
                    Sort By Latest
                  </option>
                </select>
              </div>
              <Row>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product1} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product2} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product3} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product4} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product1} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product2} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
                  <div className="product-box">
                    <img className="product-image" src={product3} alt="" />
                    <div className="product-box-text">
                      <a className="name">Dining Table</a>
                      <span className="price">150.00</span>
                      <button>Add to Cart</button>
                    </div>
                  </div>
                </Col>
                <Col md={4} col={12}>
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
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Shop;
