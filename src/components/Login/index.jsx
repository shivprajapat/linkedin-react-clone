import React from "react";
import './style.css'
import logoBig from '../../Images/logo-big.png'
const Login = () => {
  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className="login">
      <img src={logoBig} alt="Linkedin logo" />

      <form>
        <input
          type="text"
           placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          placeholder="Profile picture URL (optional)"
        />
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
