import React from 'react'
import subscribeImage from '../../Assets/Images/newsletter-1.jpg'
import './style.scss'
function SubscribeSection() {
  return (
    <section id='Subscribe'>
        <div className='subscribe-all'>
            <div className='left'>
                <img src={subscribeImage}  alt="" />
            </div>
            <div className='right'>
                <div className="sub-title">Join our mailing list!</div>
                <div className="title">Fancy $30* off your first order?</div>
                <div className='subscribe-area'>
                    <input className='input-email' type="email" placeholder='Email adress'/>
                    <input className='subscribe-submit-button' type="submit"  value="Subscribe"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SubscribeSection