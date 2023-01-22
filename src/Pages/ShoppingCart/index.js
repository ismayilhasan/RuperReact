import React from "react";
import "./style.scss";
import product1 from '../../Assets/Images/product1.jpg'
function ShoppingCart() {
  return (
    <>
      <div className="shopping-cart-heading">
        <div className="container">
          <h1 className="shop-title-heading">Shopping Cart</h1>
        </div>
      </div>

      <section id="ShoppingCart">
        <div className="container">
          <div class="shop-cart wow slideInUp" data-wow-duration="2s">
            <div class="container">
              <div class="row pt-5">
                <div
                  class="col-12 col-md-12  cart_table wow fadeInUp animated"
                  data-wow-delay="300ms"
                >
                  <div class="table-responsive">
                    <table class="table table-bordered border-radius">
                      <thead>
                        <tr>
                          <th class="darkcolor">Product</th>
                          <th class="darkcolor">Price</th>
                          <th class="darkcolor">Quantity</th>
                          <th class="darkcolor">Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-table product-detail-cart">
                              <div class="media">
                                <div class="row no-gutters">
                                  <div class="col-12 col-lg-2 product-detail-cart-image">
                                    <a class="shopping-product" href="#">
                                      <img className="product-image"
                                        src={product1}
                                        alt="Generic placeholder image"
                                      />
                                    </a>
                                  </div>

                                  <div class="col-12 col-lg-10 mt-auto product-detail-cart-data">
                                    <div class="media-body ml-lg-3">
                                      <h4 class="product-name">
                                        <a href="product-detail.html">
                                          Leather Purse
                                        </a>
                                      </h4>
                                      <p class="product-des">
                                        We offer the most complete in the
                                        country
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 class="text-center amount">$130.00</h4>
                          </td>
                          <td class="text-center">
                            <div class="quote text-center mt-1">
                              <input
                                type="number"
                                placeholder="1"
                                class="quote"
                                min="1"
                                max="100"
                              />
                            </div>
                          </td>
                          <td>
                            <h4 class="text-center amount">$136.00</h4>
                          </td>
                          <td class="text-center">
                            <a class="btn-close" href="#.">
                              <i class="lni-trash"></i>
                            </a>
                          </td>
                        </tr>
                    
                      </tbody>
                    </table>
                  </div>
            
                </div>
              </div>
            </div>
          </div>
          <div id="totalBox">
        <h4>Cart Totals</h4>
        <div class="total-div">
          <div class="sub-total d-flex justify-content-start align-items-center">
            <h6 class="me-3">Common Product Count </h6>
            <p  id="subtotal"  class="mt-1">0</p>
          </div>
          <div class="total d-flex justify-content-start">
            <h6 class="me-3">total</h6>         
            <p id="total" class="">0</p>
          </div>
        </div>
      </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingCart;
