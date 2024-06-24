import React, { useState } from 'react';
import './signIn.css'; // Import CSS file for SignInForm

const SignIn = ({ switchToSignUp }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Perform sign-in logic here
    console.log('Signing in with:', usernameOrEmail, password);
  };

  return (
    <div className="form-container"> {/* Apply form-container class */}
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="usernameOrEmail">Username or Email</label>
          <input
            type="text"
            id="usernameOrEmail"
            placeholder="Enter your username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <button onClick={switchToSignUp}>Sign up now!</button></p>
    </div>
  );
};

export default SignIn;