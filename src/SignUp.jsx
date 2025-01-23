import React from "react";
import "./AuthForms.css";
import "./index.css"; // Importation de Tailwind CSS
import { FaFacebook, FaGoogle, FaEye, FaUser, FaPhone, FaLock, FaGlobe } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="User Name" />
        </div>
        <div className="input-group">
          <FaGlobe />
          <input type="text" placeholder="Country"/> 
          {/* defaultValue="Cameroun"  */}
        </div>
        <div className="input-group">
          <FaUser />
          <input type="email" placeholder="E-Mail" />
        </div>
        <div className="input-group">
          <FaLock />
          <input type="password" placeholder="Password" />
          <FaEye />
        </div>
        <div className="input-group">
          <FaPhone />
          <input type="text" placeholder="Phone Number" />
        </div>
        <button type="submit" className="btn">SIGN UP</button>
      </form>
      <div className="social-login">
        <span>Or continue with</span>
        <div className="social-icons">
          <FaFacebook className="icon" onClick={() => alert("Sign Up with Facebook")} />
          <FaGoogle className="icon" onClick={() => alert("Sign Up with Google")} />
        </div>
        <a href="/signin">Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;
