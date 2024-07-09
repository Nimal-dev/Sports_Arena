import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TurfLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authenticate = () => {
    if (validatePassword()) {
      let param = {
        email: email,
        password: password
      };

      fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(param),
      })
        .then((res) => res.json())
        .then((userData) => {
          if (userData !== 'invalid') {
            localStorage.setItem("userdata", JSON.stringify(userData));
            setTimeout(() => {
              navigate('/');
              window.location.reload();
            }, 1000);
          } else {
            setErrorMessage('Invalid credentials. Please try again.');
          }
        })
        .catch(() => {
          setErrorMessage('An error occurred. Please try again.');
        });
    }
  };

  const validatePassword = () => {
    if (password.length < 3) {
      setPasswordError('Password must be between 6 to 12 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return (
    <>
      <div>
        <h3 className="card-title text-left" style={{ color: "blue", alignItems: "center" }}>Login</h3>
        <div className="form-group">
          <label>Username or email *</label>
          <input
            type="text"
            className="form-control p_input"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            className="form-control p_input"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          {passwordError && <p style={{ color: 'red', fontSize: '14px' }}>{passwordError}</p>}
        </div>
        {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
        <div className="text-center">
          <button
            type="button"
            onClick={authenticate}
            className="btn btn-primary btn-block enter-btn"
          >
            <strong>LOGIN</strong>
          </button>
        </div>
        <p className="sign-up">Don't have an Account?<Link to="/signup"><strong> Register Now!</strong></Link></p>
      </div>
    </>
  );
}

export default TurfLogin;
