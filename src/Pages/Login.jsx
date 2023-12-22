import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import "./Login.css";

function Register() {
  return (
    <div className="main">
      <div className="logo">
        <h1 className="headName">Chat Application</h1>
        <MessageIcon className="textIcon" fontSize="large"/>
      </div>
      <div className="formContainer">
        <div className="formWrapper">
          <p className="login">Login</p>
          <form className="form">
            <input className="logInp" type="email" placeholder="email" />
            <input className="logInp" placeholder="password" />
            <button className="logIn">Login</button>
          </form>
          <p>Don't have an account? SignUp</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
