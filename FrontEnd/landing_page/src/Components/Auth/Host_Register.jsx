import React, { useState } from 'react';

function Host_Register() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    password: '',
    usertype: 4, // Tournament UserType
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, address, contact, email, password, usertype } = formData;
      const requestData = {
        name: name.trim(),
        address: address.trim(),
        contact: contact.trim(),
        email: email.trim(),
        password: password.trim(),
        usertype,
      };

      // Send data to backend
      fetch('http://127.0.0.1:8000/api/tournamentregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Registration response:', data);
          // Handle success or display error messages from backend
          if (data.message) {
            alert(data.message); // Replace with toast or message component as per your UI design
            // Clear form after successful registration
            setFormData({
              name: '',
              address: '',
              contact: '',
              email: '',
              password: '',
              usertype: 4,
            });
          } else if (data.error) {
            alert(data.error); // Handle specific error messages from backend
          }
        })
        .catch((error) => {
          console.error('Registration error:', error);
          alert('Registration failed. Please try again.');
        });
    }
  };

  return (
    <>
      <section className="contact bg-black position-relative overflow-hidden" style={{ height: '100vh', alignContent: 'center' }}>
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
              <h2 className="fs-3 text-white mb-0">Tournament Hoster Sign Up</h2>
              <br />
              <h6 className="fs-4 text-white mb-0">Register to be a Tournament hoster!</h6>
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
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Address</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter your Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                      {errors.address && <small className="text-danger">{errors.address}</small>}
                    </div>
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Contact</label>
                      <input
                        type="number"
                        className="form-control border-0"
                        placeholder="Enter your mobile number"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                      />
                      {errors.contact && <small className="text-danger">{errors.contact}</small>}
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
                    <button className="btn btn-warning btn-hover-secondary text-capitalize mt-2 w-auto contact-btn fs-4">
                      Register
                    </button>
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

export default Host_Register;
