import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import product1 from "../../Assets/Images/product1.jpg";
import useBrands from "../../query-hooks/useBrands";
import useCategories from "../../query-hooks/useCategoires";
import useProducts from "../../query-hooks/useProducts";
import { useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/App";
function Shop() {
  const brands = useBrands();
  const { data: CategoriesData } = useCategories();
  const categoires = useCategories();
  const products = useProducts();
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [commonProducts,setCommonProducts] = React.useState([])
  const history = useHistory();
  const [ price, setPrice ] = React.useState(40.00);
  const { state: stateCategoryFromProduct } = useLocation("");
  const [{addToCart}] = useAppContext();

  React.useEffect(() => {
    if (products.isSuccess) {
      setFilteredProducts(products.data);
      setCommonProducts(products.data)
    }

    // if(stateCategoryFromProduct != "")
    // {
    //   filterByCategory(stateCategoryFromProduct)
    // }

   

  }, [products.isSuccess, products.data,stateCategoryFromProduct]);

  const handleAddToCartClick = (product) => {
    addToCart(product);
  };
  const filterByCategory = (categoryItem) => {
    const result = commonProducts.filter((product) => {

    return product.categoryName === categoryItem

    });
    setFilteredProducts(result);
  };


  const filterByBrand = (brandItem) => {
    const result = commonProducts.filter((product) => {
      return product.brandName === brandItem
    })
    setFilteredProducts(result);
  }


  const getProductDetails = (id) => {
    history.push("/details",id)
  }


  const handleInput = (e)=>{
    setPrice( e.target.value );

    const result = commonProducts.filter((product) => {
    
      return product.price >= parseInt(e.target.value )
   
    })


    setFilteredProducts(result);
  }

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
                <a  onClick={() => setFilteredProducts(commonProducts)} className="reset btn btn-primary text-white mb-2">Clear Filter</a>
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
                            <a
                              onClick={() => filterByCategory(category.name)}
                              key={category.id}
                            >
                              {category.name}  <span className="count">9</span>
                            </a>
                          ))}

                      </li>
                    </ul>
                  </div>
                </div>

                <div className="filter-brand">
                  <div className="filter-brand-heading">
                    <h2>Brand</h2>
                  </div>
                  <div className="filter-brand-body">
                    {brands.isLoading && <p>Loading...</p>}
                    {brands.isError && <p>Could not fetch users</p>}
                    {brands.isSuccess &&
                      brands.data.map((brand) => (
                        <img onClick={() => filterByBrand(brand.name)} src={brand.imageName} alt="d" />
                      ))}
                  </div>
                </div>
                <div className="filter-price mt-3">
                  <input type="range" onInput={ handleInput } />
                  <h1>Price: { price }</h1>
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
                {products.isLoading && <p>Loading...</p>}
                {products.isError && <p>Could not fetch users</p>}
                {products.isSuccess &&
                  filteredProducts.map((product) => (
                    <Col key={product.id} md={4} col={12}>
                   
                      <div className="product-box">
                        <img onClick={() => getProductDetails(product.id)}  className="product-image" src={product1} alt="" />
                        <div className="product-box-text">
                          <a className="name">{product.name}</a>
                          <span className="price">{product.price}</span>
                          <button onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Shop;
