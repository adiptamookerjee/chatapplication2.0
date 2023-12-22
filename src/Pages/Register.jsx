import React from "react";
import "./Register.css";
import MessageIcon from "@mui/icons-material/Message";

function Register() {
  return (
    <div className="main">
      <div className="logo">
        <h1 className="headname">Chat Application</h1>
        <MessageIcon className="textIcon" fontSize="large"/>
      </div>
      <div className="formContainer">
        <div className="formWrapper">
          <p className="register">Register</p>
          <form className="form">
            <input className="regInp" type="text" placeholder="name" />
            <input className="regInp" type="email" placeholder="email" />
            <input className="regInp" type="password" placeholder="password" />
            <input style={{ display: "none" }} id="file" type="file" />
            <label className="addAvatar" htmlFor="file">
              <img src={"addImage.png"} alt="" />
              <p>Add an avatar</p>
            </label>
            <button className="signUp">Sign Up</button>
          </form>
          <p>Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
