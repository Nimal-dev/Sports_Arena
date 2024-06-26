import React from 'react'
import { useState } from 'react';

function Social_Register() {
  const [formData, setFormData] = useState({
    Name: '',
    Dob: '',
    image: null,
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Name) newErrors.Name = 'Full Name is required';
    if (!formData.Dob) newErrors.Dob = 'Date of Birth is required';
    if (!formData.image) newErrors.image = 'Image is required';
    if (formData.image && !formData.image.type.startsWith('image/')) {
      newErrors.image = 'Only image files are allowed';
    }
    if (!formData.email) newErrors.email = 'Email is required';
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
      <section className="contact bg-secondary position-relative overflow-hidden" style={{overflow:"hidden"}}>
        <div className="container position-relative">
          <div className="dots-shape-left position-absolute">
            <img src="../assets/images/icons/dot-shape.png" alt="dot-shape"/>
          </div>
          <div className="dots-shape-right position-absolute">
            <img src="../assets/images/icons/dot-shape.png" alt="dot-shape"/>
          </div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <small className="fs-7 d-block text-warning">Join us Now</small>
              <h2 className="fs-3 text-white mb-0">Social Media Register</h2><br/>
              <h6 className="fs-5 text-white mb-0">Register to be a Part of the Social Media Team and Engage in posting awesome pictures and Latest Sports News!</h6>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <form className="position-relative glassmorphism-form" onSubmit={handleSubmit}>
                <div className="row ps-xxl-5 ps-xl-5 ps-lg-3 ps-md-0 ps-sm-0 ps-0">

                  {/* ---------------------Name input Field------------------------- */}
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control border-0" 
                        placeholder="Enter your name" 
                        name="Name"
                        value={formData.Name}
                        onChange={handleInputChange}
                      />
                      {errors.Name && <small className="text-critical">{errors.Name}</small>}
                    </div>
                  </div>
                 
                        {/* ---------------------DOB Input Field------------------------- */}
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">D.O.B</label>
                      <input 
                        type="tel" 
                        className="form-control border-0" 
                        placeholder="Enter your mobile number" 
                        name="contact"
                        value={formData.Dob}
                        onChange={handleInputChange}
                        />
                      {errors.Dob && <small className="text-critical">{errors.Dob}</small>}
                    </div>
                  </div>
                  {/* ---------------------Image Input Field------------------------- */}
                 
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Image (Image Upload)</label>
                      <input 
                        type="file" 
                        className="form-control border-0" 
                        accept="image/*" 
                        name="image"
                        onChange={handleInputChange}
                      />
                      {errors.image && <small className="text-critical">{errors.image}</small>}
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
                      {errors.email && <small className="text-critical">{errors.email}</small>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Password</label>
                      <input 
                        type="password" 
                        className="form-control border-0" 
                        placeholder="Enter your password" 
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      {errors.password && <small className="text-critical">{errors.password}</small>}
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

export default Social_Register