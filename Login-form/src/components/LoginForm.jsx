import { useState } from "react";
import './LoginForm.css';
function LoginForm(){
  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPassword(){
    setShowPassword(!showPassword);
    /*
      Another solution is:
      if (showPassword) {
        setShowPassword(false);
      } else {
        setShowPassword(true);
      }
    */
  }
  return (
    <div className="Container">
      <div className="Login-form">
        <h2 className="login">Login Form</h2>
      <input placeholder="Email" className="email"/>
      <div>
      <input placeholder="Password" className="password" type={showPassword?'text':'password'}/>
      <button className="password-show"
      onClick={toggleShowPassword}>{showPassword?'Hide':'Show'}</button>
      </div>
      <button className="inline-button">Login</button>
      <button className="inline-button">Sign up</button>
      </div>
    </div>
  );
}
export default LoginForm;