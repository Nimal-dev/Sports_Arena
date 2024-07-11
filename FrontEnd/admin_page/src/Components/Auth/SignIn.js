import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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
                toast.success('Login successful!');
                setTimeout(() => {
                  navigate('/');
                  window.location.reload();
                }, 1000);
              } else {
                toast.error('Invalid credentials. Please try again.');
              }
            })
            .catch(() => {
              toast.error('An error occurred. Please try again.');
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
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-6">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <a href="/admin" className="">
                                <h3 className="text-primary">SPORTXCONNECT</h3>
                            </a>
                            <h3>Sign In</h3>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                            {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary py-3 w-100 mb-4"
                            onClick={authenticate}
                        >
                            Sign In
                        </button>
                        <a href="http://localhost:3000/" className="text-center mb-4 text-muted">Go Home!</a>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignIn;
