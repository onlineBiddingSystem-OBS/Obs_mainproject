import React from 'react';
import './login.css'; // Import CSS file for styling

const LoginPage = ({ goToRegistration }) => {
  return (
    <div className="login-container">
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
      </form>
      <p>Don't have an account? <button onClick={goToRegistration}>Register</button></p>
    </div>
  );
};

export default LoginPage;
