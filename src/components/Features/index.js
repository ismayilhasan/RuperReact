import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
function Features() {
  return (
    <section id="Features">
      <div className="container">
        <Row>
          <Col md={3}>
            <div className="feature-box">
              <i className="fa-solid fa-truck-fast"></i>
              <h3 className="feature-box-title">Free Shipping</h3>
              <p className="feature-box-description">
                You will love at great low prices
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="feature-box">
              <i className="fa-solid fa-credit-card"></i>
              <h3 className="feature-box-title">Free Shipping</h3>
              <p className="feature-box-description">
                You will love at great low prices
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="feature-box">
              <i className="fa-brands fa-stack-exchange"></i>
              <h3 className="feature-box-title">Free Shipping</h3>
              <p className="feature-box-description">
                You will love at great low prices
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="feature-box">
              <i className="fa-solid fa-phone"></i>
              <h3 className="feature-box-title">Free Shipping</h3>
              <p className="feature-box-description">
                You will love at great low prices
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Features;
