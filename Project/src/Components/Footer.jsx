import React from 'react'
import './CSS/Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer-outer">

        <div className="footer-top">
          <div className="secure-payement-outer footer-line">
            <div className="secure-payement-icon">
              <img src="/images/f1.png" alt="" />
            </div>
            <div className="secure-payement-text">
              <h5>Secure Payment</h5>
              <p>With support for cards, net banking, UPI, wallets & more, we offer seamless digital payment experience</p>
            </div>
          </div>



          <div className="secure-payement-outer footer-line">
            <div className="secure-payement-icon">
              <img src="/images/f2.png" alt="" />
            </div>
            <div className="secure-payement-text">
              <h5>Most Trusted Brand</h5>
              <p>Our solutions are purely consumer centric, we listen to you and work for your safety, comfort and style.</p>
            </div>
          </div>
          <div className="secure-payement-outer">
            <div className="secure-payement-icon">
              <img src="/images/f3.png" alt="" />
            </div>
            <div className="secure-payement-text">
              <h5>Customised Gifting Options</h5>
              <p>Our design experts make sure you find uniqueness and exclusivity in all our offerings</p>
            </div>
          </div>
        </div>

      <hr className='hr-line-footer'/>

    <div className="footer-bottom">
      <div className="footer-bottom-1">
        <img src="/images/flogo.webp" alt="" />
        <p>Flowera is a one-stop solution for Flowers, cakes & gift delivery to More than 500plus locations in India.</p>
      </div>
      <div className="footer-bottom-2">
        <h3>Information</h3>
        <ul>
          <li>All City</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-bottom-3">
        <h3>Follow Us</h3>
      </div>
      <div className="footer-bottom-4">
        <h3>Contact Us</h3>
      </div>
    </div>




      </div>
    
    </>
  )
}

export default Footer