import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

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
        if (userData.message !== 'Invalid credentials') {
          localStorage.setItem("userdata", JSON.stringify(userData));
          setTimeout(() => {
            console.log(userData);
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
    if (password.length < 6 || password.length > 12) {
      setPasswordError('Password must be between 6 to 12 characters');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  return (
    <>
      <section className="contact bg-secondary position-relative d-flex justify-content-center align-items-center" style={{ height: "100vh", overflow: "hidden" }}>
        <div className="container position-relative">
          <div className="dots-shape-left position-absolute">
            <img src="../assets/images/icons/dot-shape.png" alt="dot-shape" />
          </div>
          <div className="dots-shape-right position-absolute">
            <img src="../assets/images/icons/dot-shape.png" alt="dot-shape" />
          </div>
          <div className="login-container">
            <div className="screen">
              <div className="screen__content">
                <img src="../assets/images/logo.png" alt="logo" style={{width:"150px", marginLeft:"150px"}} />
                <form className="login" onSubmit={handleLogin}>
                  <div className="login__field">
                    <i className="login__icon fa fa-user"></i>
                    <input 
                      type="email"
                      className="login__input" 
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="text-danger">{emailError}</div>}
                  </div>

                  <div className="login__field">
                    <i className="login__icon fas fa-lock"></i>
                    <input 
                      type="password" 
                      className="login__input" 
                      placeholder="Password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                  </div>
                  {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
                  <button className="button login__submit" type="submit">
                    <span className="button__text">Log In Now</span> 
                    <i className="button__icon fas fa-chevron-right"></i>
                  </button>
                  
                  <a className="btn" href='/'>
                    <i className=" fas fa-arrow-left ms-2"></i>
                    <span style={{color:"#4C489D", fontSize:"16px"}}><b>Go back</b></span>
                    <a href="http://localhost:3001/" className="btn" ><span style={{color:"#4C489D", fontSize:"16px"}}><b>Back Login</b></span></a>
                    
                  </a>
                  
                    
                  
                  
                </form>
                
              </div>
              <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>    
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
              </div>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
