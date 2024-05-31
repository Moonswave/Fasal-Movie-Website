import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let valid = true;

    if (!validatePassword(password)) {
      setPasswordError('Please give at least 1 capital letter, 1 number, and 1 special character');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // You can add authentication logic here
      navigate('/private');
    }
  };

  return (
    <>
    <div className='loginPage'>
      <div className="container">
        <h1>Confirm Your Password to Proceed</h1>
        <form onSubmit={handleSubmit}>
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
          
          <button type="submit">Proceed</button>
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </div>
    </>
  );
};

export default PrivateLogin;
