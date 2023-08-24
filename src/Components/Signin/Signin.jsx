import React from 'react'
import '../Signin/Signin.scss'
import { AiOutlineGoogle, AiFillApple } from 'react-icons/ai'

export default function Signin() {
  return (
    <div className="signin-container">
      <div className="gradient-text">Sign in to your Account</div>
      <div className="buttons-container">
        <button>
          {' '}
          <AiOutlineGoogle /> Sign in with Google
        </button>
        <button>
          {' '}
          <AiFillApple /> Sign in with Apple
        </button>
      </div>
      <div className="credentials-form">
        <label htmlFor="email">Email address</label>
        <br />
        <input type="email" name="" id="" placeholder="name@example.com" />
        <label htmlFor="password">Password</label>
        <span>Forgot Password?</span>
        <br />
        <input type="password" name="" id="" placeholder="********" />
      </div>
      <div className="remember-me">
        <input type="checkbox"/>
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div className="signin-button">
            SIGN IN
      </div>
      <div className="signup-div">
        <p>Don't have an account yet? <span>Sign up here</span></p>
      </div>
    </div>
  )
}
