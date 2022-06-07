import React from "react";
import Header from "../Nav-Bar/Header.jsx";
import {Form}  from "react-bootstrap"
import "./Login.css"
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:""
    }
  }
  render() {
    console.log(this.state.email)
    console.log(this.state.password)
    return (
        <div class="cont">
        <div class="form sign-in">
          <h2>Sign In</h2>
          <label>
            <span>Email Address</span>
            <Form.Control type="email" name="email" placeholder="name@example.com" onChange={(e)=>{this.setState({email:e.target.value})}}/>
          </label>
      
          <label>
            <span>Password</span>
            <Form.Control type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
          
          </label>
         
          <button class="submit" type="button">Sign In</button>
          <p class="forgot-pass">Forgot Password ?</p>
        </div>
    
        <div class="sub-cont">
          <div class="img">
            <div class="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div class="img-text m-in">
              <h2>One of us?</h2>
              <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            <div class="img-btn">
              <span class="m-up">Sign Up</span>
              <span class="m-in">Sign In</span>
            </div>
          </div>
          </div> 
        
          </div> 
    )
  }
}

export default Login ;
