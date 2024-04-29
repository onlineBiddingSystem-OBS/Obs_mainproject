import React, { useState } from 'react';
import LoginPage from './loginpage';
import RegisterPage from './registerpage';

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const goToRegistration = () => {
    setIsLoginPage(false);
  };

  const goToLogin = () => {
    setIsLoginPage(true);
  };

  return (
    <div>
      {isLoginPage ? <LoginPage goToRegistration={goToRegistration} /> : <RegisterPage goToLogin={goToLogin} />}
    </div>
  );
};

export default App;
