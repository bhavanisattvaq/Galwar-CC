import { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/signIn';
import SignUp from './components/SignUp/signUp';

function App() {
  const [isSigningIn, setIsSigningIn] = useState(true);

  const switchToSignUp = () => {
    setIsSigningIn(false);
  };

  const switchToSignIn = () => {
    setIsSigningIn(true);
  };
  return (
    <div>
      {isSigningIn ? (
        <SignIn switchToSignUp={switchToSignUp} />
      ) : (
        <SignUp switchToSignIn={switchToSignIn} />
      )}
    </div>
  );
}

export default App;
