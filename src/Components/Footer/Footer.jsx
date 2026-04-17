import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>I'm a front end developer from Nairobi, Kenya. With an experience of 5 years. Developed and maintained responsive, high-performance web
                        applications using React.js, Angular, JavaScript, and Apollo
                        GraphQL, with a strong emphasis on accessibility, scalability, and
                        user experience. </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user} alt="" style={{ width: "80px", height: "80px" }}/>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>&copy; 2026 Paulyne Wambui. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
