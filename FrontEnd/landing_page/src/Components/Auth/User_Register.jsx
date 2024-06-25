import React, { useState } from 'react';

function User_Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
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
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.userName) newErrors.userName = 'User Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
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
      <section className="contact bg-secondary position-relative overflow-hidden" style={{ height: "100vh", alignContent: "center" }}>
        <div className="container position-relative">
          <div className="dots-shape-left position-absolute">
            <img src="../assets/images/icons/dot-shape.png" alt="dot-shape" />
          </div>
          <div className="dots-shape-right position-absolute">
            <img src="../assets/images/icons/dot-shape.png" alt="dot-shape" />
          </div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <small className="fs-7 d-block text-warning">Join us Now</small>
              <h2 className="fs-3 text-white mb-0">User Sign Up</h2><br />
              <h6 className="fs-4 text-white mb-0">Register to access the Turf Booking <br />Features!</h6>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <form className="position-relative" onSubmit={handleSubmit}>
                <div className="row ps-xxl-5 ps-xl-5 ps-lg-3 ps-md-0 ps-sm-0 ps-0">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Full Name</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter your name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                      {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">User Name</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter your username"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                      />
                      {errors.userName && <small className="text-danger">{errors.userName}</small>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Email address</label>
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Enter your email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Email Password</label>
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-warning btn-hover-secondary text-capitalize mt-2 w-auto contact-btn fs-4">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default User_Register;
