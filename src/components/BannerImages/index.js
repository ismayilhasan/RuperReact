import React from 'react'
import { Col, Row } from 'react-bootstrap';
import banner1 from '../../Assets/Images/banner-1.jpg'
import banner2 from '../../Assets/Images/banner-2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { Link } from 'react-router-dom';
function BannerImages() {
  return (
    <section id='BannerArea'>
        <div className='container'>
            <Row>
               
                <Col md={7}>
                    <div className='left-banner'>
                        <img src={banner1} alt="fdfv"/>
                        <div className='left-banner-text'>
                            <h3 className="left-title-banner">Let the adventure <br/> begin. </h3>
                            <div className='left-description-banner'>
                                Sed lectus. Aliquam lorem ante,
                            <br/>
                                dapibus in, viverra quis, feugiat a, tellus
                            </div>
                            <Link to="/shop" className="shop-button" href="shop-grid-left.html">SHOP NOW</Link>
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='right-banner'>
                        <img src={banner2} alt="bannerimage" />
                        <div className='right-banner-text'>
                        <h3 className="right-title-banner">UP TO <span>20% OFF</span></h3>
                        <div className="right-description-banner">
                            Don't miss savings on bedroom, living,
                        </div>
                        </div>
                    
                    </div>
                </Col> 
          
            </Row>
        </div>
    </section>
  )
}

export default BannerImages