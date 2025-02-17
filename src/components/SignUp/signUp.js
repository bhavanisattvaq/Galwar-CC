import React, { useState } from 'react';
import './signUp.css'; // Import CSS file for SignUpForm

const SignUp = ({ switchToSignIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    // Perform sign-up logic here
    console.log('Signing up with:', username, email, password, confirmPassword);
  };

  return (
    <div className="form-container"> {/* Apply form-container class */}
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={3}
            maxLength={15}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
            title="Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            minLength={8}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
              required
            /> I agree to the Terms and Conditions
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <button onClick={switchToSignIn}>Sign in here!</button></p>
    </div>
  );
};

export default SignUp;
