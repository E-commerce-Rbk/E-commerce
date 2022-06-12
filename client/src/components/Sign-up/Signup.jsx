import React from "react";

import Header from "../Nav-Bar/Header.jsx";
import { Form } from "react-bootstrap"
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import "./Signup.css"
import { signup } from "../../api/index.js"


class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      adress: "",
      phoneNumber: 0,

      userName:""

    }
  }
  handleSignup(user) {
    signup(user)
      .then((res) => alert("account created"))
      .catch((err) => alert(err))
  }
  render() {
   

    return (
      <div class="cont">
        <div class="form sign-in">
          <h2>Sign Up</h2>
          <label>
            <span>Email Address</span>

            <Form.Control type="email" name="email" placeholder="name@example.com" onChange={(e) => { this.setState({ email: e.target.value }) }} />
          </label>
          <label>
            <span>Password</span>
            <Form.Control type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
            <PasswordStrengthMeter password={this.state.password} />
          </label>
          <label>
            <span>User name</span>
            <Form.Control type="text" name="userName" onChange={(e) => { this.setState({ userName: e.target.value }) }} />
          </label>
          <label>
            <span>Location</span>
            <input type="text" name="adress" onChange={(e) => { this.setState({ adress: e.target.value }) }} />
          </label>
          <label>
            <span>Phone Number</span>
            <input type="number" name="PhoneNumber" onChange={(e) => { this.setState({ phoneNumber: e.target.value }) }} />
          </label>
          <button onClick={() => {
            this.handleSignup({
              userName:this.state.userName,
              role:"user",
              email: this.state.email,
              password: this.state.password,
              adress: this.state.adress,
              phoneNumber:this.state.phoneNumber
            })
          }} className="BUTTON" type="button">Sign Up</button>


        </div>

        <div class="sub-cont">
          <div class="img">
            <div class="img-text m-up">
              <h2>You already have an account?</h2>
            </div>
            <div class="img-btn">
              <span class="m-up">Sign In</span>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default Signup;
