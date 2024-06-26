import React, { useState } from 'react';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form data:', formData);
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
                <img src="../assets/images/logo.png" style={{width:"150px", marginLeft:"150px"}}></img>
                <form className="login" onSubmit={handleSubmit}>
                  <div className="login__field">
                  <i className="login__icon fa fa-user"></i>
                    <input 
                      type="email"
                      className="login__input" 
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  <div className="login__field">
                    <i className="login__icon fas fa-lock"></i>
                    <input 
                      type="password" 
                      className="login__input" 
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                  </div>
                  <button className="button login__submit">
                    <span className="button__text">Log In Now</span>
                    <i className="button__icon fas fa-chevron-right"></i>
                  </button>
                  
                  <a className="btn" href='/'>
                    <span style={{color:"#4C489D", fontSize:"16px"}}><b>Go back</b></span>
                    <i className="button__icon fas fa-chevron-right"></i>
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
