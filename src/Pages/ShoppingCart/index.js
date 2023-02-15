import React from "react";
import "./style.scss";
import product1 from "../../Assets/Images/product1.jpg";
import { useAppContext } from "../../context/App";
function ShoppingCart() {
  const [{ cart,productCartCount,setProductCartCount,setCart }] = useAppContext();
  const [totalPrice,setTotalPrice] = React.useState(0)

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  React.useEffect(() => { 
    const storedCount = localStorage.getItem('productCounts');
    if (storedCount) {
      setProductCartCount(JSON.parse(storedCount));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('productCounts', JSON.stringify(productCartCount));
  },[productCartCount])  
  
  
  const handeChangeCount = (id,event) => {
    setProductCartCount((prevState) => {
      const newState = { ...prevState };
      newState[id] = event.target.value;  
      return newState;
    
    })
    

 
 
  }

  const deleteProduct = (id) => {
    const newCart = cart.filter(product => (product.id !==  id))
    setCart(newCart)
  }

  return (
    <>
      <div className="shopping-cart-heading">
        <div className="container">
          <h1 className="shop-title-heading">Shopping Cart</h1>
        </div>
      </div>

      <section id="ShoppingCart">
        <div className="container">
          <div className="shop-cart wow slideInUp" data-wow-duration="2s">
            <div className="container">
              <div className="row pt-5">
                <div
                  className="col-12 col-md-12  cart_table wow fadeInUp animated"
                  data-wow-delay="300ms"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered border-radius">
                      <thead>
                        <tr>
                          <th className="darkcolor">Product</th>
                          <th className="darkcolor">Price</th>
                          <th className="darkcolor">Quantity</th>
                          <th className="darkcolor">Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((product) => (
                          <tr key={product.id}>
                            <td>
                              <div className="d-table product-detail-cart">
                                <div className="media">
                                  <div className="row no-gutters">
                                    <div className="col-12 col-lg-2 product-detail-cart-image">
                                      <a className="shopping-product" href="#">
                                        <img
                                          className="product-image"
                                          src={product.imageName}
                                          alt="Generic placeholder image"
                                        />
                                      </a>
                                    </div>

                                    <div className="col-12 col-lg-10 mt-auto product-detail-cart-data">
                                      <div className="media-body ml-lg-3">
                                        <h4 className="product-name">
                                          <a href="product-detail.html">
                                            {product.name}
                                          </a>
                                        </h4>
                                        <p className="product-des">
                                          {product.description.slice(0,46)}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <h4 className="text-center amount">${product.price}</h4>
                            </td>
                            <td className="text-center">
                              <div className="quote text-center mt-1">
                                <input
                                  type="number"
                                  value={productCartCount[product.id] == undefined? 1 :productCartCount[product.id] }
                 
                                  min="1"
                                  max="100"
                                  onChange={(event) => handeChangeCount(product.id,event)}
                                />
                              </div>
                            </td>
                            <td>
                         
                            
                              <h4 className="text-center amount">{(productCartCount[product.id] == undefined ? 1 : productCartCount[product.id])  * product.price}</h4>
                            </td>
                            <td className="text-center">
                              <a onClick={() => deleteProduct(product.id)} className="btn-close" href="#.">
                                <i  className="lni-trash"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="totalBox">
            <h4>Cart Totals</h4>
            <div className="total-div">
              <div className="sub-total d-flex justify-content-start align-items-center">
                <h6 className="me-3">Common Product Count </h6>
                <p id="subtotal" className="mt-1">
                      1
                </p>
              </div>
              <div className="total d-flex justify-content-start">
                <h6 className="me-3">total</h6>
                <p id="total" className="">
                  {total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingCart;
