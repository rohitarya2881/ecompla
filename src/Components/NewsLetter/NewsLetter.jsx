import React from 'react'
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers Your Email</h1>
        <p>Subscribe to our mewsletter and stay updated</p>
  
    <input type="email"  placeholder='your email id' />
    <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter;