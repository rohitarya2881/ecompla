import React from 'react';
import './CSS/loginsignup.css';

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignupcontainer">
        <h1>Sign up</h1>
        <div className="loginsignupfield">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Enter Email' />
          <input type="password" placeholder='Password' />
        </div>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button className="loginsignup-submit">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginSignup;
