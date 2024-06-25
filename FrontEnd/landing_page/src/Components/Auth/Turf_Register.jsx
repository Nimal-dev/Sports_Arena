import React, { useState } from 'react';

function Turf_Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    contact: '',
    certificate: null,
    image: null,
    amountPerHour: '',
    schedule: '',
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
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.contact) newErrors.contact = 'Contact is required';
    if (!formData.certificate) newErrors.certificate = 'Certificate is required';
    if (formData.certificate && formData.certificate.type !== 'application/pdf') {
      newErrors.certificate = 'Only PDF files are allowed for certificate';
    }
    if (!formData.image) newErrors.image = 'Image is required';
    if (formData.image && !formData.image.type.startsWith('image/')) {
      newErrors.image = 'Only image files are allowed';
    }
    if (!formData.amountPerHour) newErrors.amountPerHour = 'Amount per Hour is required';
    if (!formData.schedule) newErrors.schedule = 'Schedule is required';
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
      <section className="contact bg-primary position-relative overflow-hidden">
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
              <h2 className="fs-3 text-white mb-0">Turf Owner Sign Up</h2><br/>
              <h6 className="fs-4 text-white mb-0">Register to list your turf and manage bookings!</h6>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <form className="position-relative glassmorphism-form" onSubmit={handleSubmit}>
                <div className="row ps-xxl-5 ps-xl-5 ps-lg-3 ps-md-0 ps-sm-0 ps-0">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
                      {errors.fullName && <small className="text-critical">{errors.fullName}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Address</label>
                      <textarea 
                        className="form-control border-0" 
                        rows="4" 
                        placeholder="Enter your address" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      ></textarea>
                      {errors.address && <small className="text-critical">{errors.address}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Contact</label>
                      <input 
                        type="tel" 
                        className="form-control border-0" 
                        placeholder="Enter your mobile number" 
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                      />
                      {errors.contact && <small className="text-critical">{errors.contact}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Certificate (PDF Upload)</label>
                      <input 
                        type="file" 
                        className="form-control border-0" 
                        accept=".pdf" 
                        name="certificate"
                        onChange={handleInputChange}
                      />
                      {errors.certificate && <small className="text-critical">{errors.certificate}</small>}
                    </div>
                  </div>
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
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Amount per Hour</label>
                      <input 
                        type="number" 
                        className="form-control border-0" 
                        placeholder="Enter amount per hour" 
                        name="amountPerHour"
                        value={formData.amountPerHour}
                        onChange={handleInputChange}
                      />
                      {errors.amountPerHour && <small className="text-critical">{errors.amountPerHour}</small>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Schedule</label>
                      <input 
                        type="text" 
                        className="form-control border-0" 
                        placeholder="Enter your working hours (e.g., 9 AM - 9 PM)" 
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleInputChange}
                      />
                      {errors.schedule && <small className="text-critical">{errors.schedule}</small>}
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

export default Turf_Register;
