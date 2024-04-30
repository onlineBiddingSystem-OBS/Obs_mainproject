import React from 'react';
import './login1.css'; // Import CSS file for styling

const LoginPage = ({ goToRegistration }) => {
  return (
    <div className="login-container font-sans">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <a href='www.kartikyeda.com'>Forgot password?</a>
      </form>
      <div>
      <input type ="checkbox" id='remember' name='remember'/>
      <label for="remember">Remember me</label>
      </div>
      
      <p>Don't have an account? <button onClick={goToRegistration}>Register</button></p>
    </div>
  );
};

export default LoginPage;
