import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Email must end with @gmail.com');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Please give at least 1 capital letter, 1 number, and 1 special character');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // You can add authentication logic here
      navigate('/home');
    }
  };

  return (
    <div className='loginPage'>
      <div className="container">
        <h1>Login to Your Movie Library</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p className="error">{passwordError}</p>}
          
          <button type="submit">Login</button>
          <a href="#">Forgot Password?</a>
        </form>
          <p className='Createsign'>Create an Account: <a href='/signin'>Sign In</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
