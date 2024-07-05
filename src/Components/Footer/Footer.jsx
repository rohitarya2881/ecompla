import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
        <i className="fa-brands fa-amazon"></i>            
        <p>Shopper</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
            <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="footer-icons-container">
            <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="footer-icons-container">
            <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="footer-icons-container">
            <i className="fa-brands fa-twitter"></i>
            </div>
            
        </div>
        <div className="footer-copywrite">
            <hr />
            <p>Copyright @ 2024 - All rights reserved</p>

        </div>
    </div>
  )
}

export default Footer