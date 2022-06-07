import React from "react";
import Header from "../Nav-Bar/Header.jsx";
import {Form}  from "react-bootstrap"

import "./Signup.css"

class Signup extends React.Component { 
 constructor(props){
   super(props)
   this.state={
     email:"",
     password:"",
    adress:"",
    phoneNumber:0,
   
   }
 }
  render() {
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.adress)
    console.log(this.state.phoneNumber)
  return (
    <div class="cont">
    <div class="form sign-in">
      <h2>Sign Up</h2>
      <label>
        <span>Email Address</span>
        <Form.Control type="email" name="email" placeholder="name@example.com" onChange={(e)=>{this.setState({email:e.target.value})}}/>
      </label>
      <label>
        <span>Password</span>
        <Form.Control type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
      </label>
      <label>
        <span>Location</span>
        <input type="text" name="adress" onChange={(e)=>{this.setState({adress:e.target.value})}}/>
      </label>
      <label>
        <span>Phone Number</span>
        <input type="number" name="PhoneNumber" onChange={(e)=>{this.setState({phoneNumber:e.target.value})}}/>
      </label>
      <button class="submit" type="button">Sign Up</button>
      
    </div>

    <div class="sub-cont">
      <div class="img">
        <div class="img-text m-up">
          <h2>You already have an account?</h2>
        </div>
        <div class="img-text m-in">
          <h2>One of us?</h2>
          <p>If you already has an account, just sign in. We've missed you!</p>
        </div>
        <div class="img-btn">
          <span class="m-up">Sign In</span>
          <span class="m-in">Sign In</span>
        </div>
      </div>
      </div> 
    
      </div> 




  );
}
}

export default Signup;
