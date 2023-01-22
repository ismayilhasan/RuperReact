import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './style.scss'
import headerLogoImage from "../../Assets/Images/header-logo.png";
import paymentsImage from '../../Assets/Images/payments.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <footer id='Footer'>
        <div className='container'>
            <Row>
                <Col md={3}>
                    <div className='footer-icon-area'>
                        <img className='footer-icon' src={headerLogoImage} alt="" />
                    </div>
                </Col>
                <Col md={3}>
                   <div className='footer-contact'>
                        <h2>contact us</h2>
                        <a href="">616.774.0561</a>                   
                        <a href="">866.453.4748</a>                   
                        <a href="">HR Fax: 810.222.5439</a>
                        <a href="">sales@ruperfurniture.com</a>
                   </div>
                </Col>
                <Col md={3}>
                   <div className='footer-services'>
                        <h2>services</h2>
                        <a href="">Sale</a>                   
                        <a href="">Quick Ship</a>                   
                        <a href="">New Designs</a>                   
                        <a href="">Accidental Fabric Protection</a>
                        <a href="">Furniture Care</a>
                        <a href="">Gift Card</a>
                   </div>
                </Col>
                <Col md={3}>
                   <div className='footer-newsletter'>
                        <h2>newsletter</h2>
                        <div className='newsletter-text'>
                            Enter your email below to be the first to know about new collections and product launches.
                        </div>
                        <div className='email-input-area'>
                            <input type="email" placeholder='Email Address' />
                            <button className='footer-submit-button' type="submit"><i className="fa-solid fa-inbox"></i></button>
                        </div>
                        <div className='footer-newsletters-payments'>
                            <img src={paymentsImage} alt="" />
                        </div>
                     
                   </div>
                </Col>
            </Row>
            <div className='copyright-area'>
                <p className="copyright">Copyright © 2022. All Right Reserved</p>
                <ul className='sosial-media-list'>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-whatsapp"></i></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer