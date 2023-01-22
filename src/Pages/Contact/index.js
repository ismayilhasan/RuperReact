import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
function Contact() {
  return (
    <>
      <div className="contact-heading">
        <div className="container">
          <h1 className="shop-title-heading">Contact</h1>
        </div>
      </div>

      <section id="ContactBody">
        <div className="container">
          <div className="map-area">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24313.215380891517!2d49.86191205!3d40.3833254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLEsIEF6yZlyYmF5Y2Fu!5e0!3m2!1saz!2s!4v1658936355868!5m2!1saz!2s"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-area">
            <div className="contact-area-heading">
                <h2>Need Help?</h2>
            </div>
            <Row>
              <Col md={4}>
                <div className="left">
                  <div className="item-title">
                    <h2>Phone</h2>
                  </div>
                  <div className="tel">810.222.5439</div>
                </div>
              </Col>
              <Col md={4}>
                <div className="middle">
                  <div className="item-title">
                    <h2>CUSTOMER SERVICE</h2>
                  </div>
                  <p>Monday to Friday</p>
                  <p>8:00am – 4:00pm Sydney, NSW time (UTC +10)</p>
                  <p>Saturday and Sunday closed</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="right">
                  <div className="item-title">
                    <h2>RETURNS</h2>
                  </div>
                  <p>For information on Returns and Refunds, please click here.</p>
                  
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
