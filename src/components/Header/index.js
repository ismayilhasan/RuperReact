import React from "react";
import "./style.scss";
import headerLogoImage from "../../Assets/Images/header-logo.png";
import "bootstrap";
import { useAppContext } from "../../context/App";
import { Link } from "react-router-dom";
import useBrands from "../../query-hooks/useBrands";
function Header() {
  const [{ toggleSidebar }] = useAppContext();

  return (
    <>
      <header id="Header">
        <div className="container">
          <div className="header-all">
            <div className="header-logo-area">
              <div className="site-logo">
                <a href="">
                  <img
                    className="header-logo-image"
                    src={headerLogoImage}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="navbar">
              <nav>
                <ul className="navbar-all">
                  <li className="nav-item">
                    <Link className="navlink" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navlink" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">Blog</li>
                  <li className="nav-item">
                    <Link className="navlink" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">About Us</li>
                </ul>
              </nav>
            </div>

            <div className="right-icons-area">
              <ul className="right-icons-area-all">
                <li>
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-magnifying-glass right-icons-item"></i>
                </li>
                <li>
                  <Link to="/shop/wishlist" className="wishlist-link">
                    <i className="fa-regular fa-heart right-icons-item"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/shop/shop-cart" className="wishlist-link">
                    <i className="fa-solid fa-bag-shopping right-icons-item"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <header id="HeaderMobile">
        <div className="container">
          <div className="header-mobile-all">
            <div className="burger-menu">
              <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
            </div>
            <div className="icon-area">
              <img className="icon-mobile-image" src={headerLogoImage} alt="" />
            </div>
            <div className="shop-icon-area">
              <i className="fa-solid fa-bag-shopping right-icons-item"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
