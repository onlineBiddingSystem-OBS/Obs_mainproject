import React from 'react';
import './register.css'; // Import CSS file for styling

const RegisterPage = ({ goToLogin }) => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <button onClick={goToLogin}>Login</button></p>
    </div>
  );
};

export default RegisterPage;
