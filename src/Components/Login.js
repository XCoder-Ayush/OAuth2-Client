import React from "react";
import "./Login.css";

const Login = () => {
  const LoginWithGoogle = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };
  return (
    <>
      <div className="login-page">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <div className="form">
          <form className="login-form">
            <input type="text" name="" id="" placeholder="username" />
            <input type="password" name="" id="" placeholder="password" />
            <button>Login</button>
            <p className="message">
              Not Registered? <a href="#">Create an account</a>
            </p>
          </form>
          <button className="login-with-google-btn" onClick={LoginWithGoogle}>
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
