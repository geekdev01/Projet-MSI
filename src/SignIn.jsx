import React from "react";
import "./AuthForms.css";
import "./index.css"; // Importation de Tailwind CSS
import { FaFacebook, FaGoogle, FaEye, FaUser, FaLock } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form>
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="User name / E-mail" />
        </div>
        <div className="input-group">
          <FaLock />
          <input type="password" placeholder="Enter Password" />
          <FaEye />
        </div>
        <button type="submit" className="btn">SIGN NOW</button>
      </form>
      <div className="social-login">
        <span>Or using</span>
        <div className="social-icons">
          <FaFacebook className="icon" onClick={() => alert("Sign In with Facebook")} />
          <FaGoogle className="icon" onClick={() => alert("Sign In with Google")} />
        </div>
        <a href="/signup">Create new account</a>
      </div>
    </div>
  );
};

export default SignIn;
