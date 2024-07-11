import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 3) newErrors.password = 'Password must be at least 3 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success('User registered successfully!');
          setMessage('User registered successfully!');
          setFormData({ name: '', email: '', password: '' }); // Clear form after successful registration
        } else {
          setErrors(data.errors || {});
          toast.error('Registration failed!');
          setMessage('Registration failed!');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.');
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
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
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <label className="form-label text-white fs-7 mb-3">Full Name</label>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
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
                    <label className="form-label text-white fs-7 mb-3">Password</label>
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
                  <button className="btn btn-warning btn-hover-secondary text-capitalize mt-2 w-auto contact-btn fs-4" type="submit">
                    Register Now
                  </button>
                </div>
              </div>
            </form>
            {message && <p className="mt-3">{message}</p>}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default UserRegister;
