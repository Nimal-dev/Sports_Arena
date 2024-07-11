import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Turf_Register() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [certificate, setCertificate] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [endingTime, setEndingTime] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Full Name is required';
    if (!address) newErrors.address = 'Address is required';
    if (!contact) newErrors.contact = 'Contact is required';
    if (contact.length !== 10) newErrors.contact = 'Contact number must be 10 digits';
    if (!certificate) newErrors.certificate = 'Certificate is required';
    if (!image) newErrors.image = 'Image is required';
    if (!amount) newErrors.amount = 'Amount per Hour is required';
    if (!startingTime) newErrors.startingtime = 'Starting time is required';
    if (!endingTime) newErrors.endingtime = 'Ending time is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password.length < 3) newErrors.password = 'Password must be at least 3 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (event, setFile) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/tournamentfileUpload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setFile(data.filepath); // Assuming the API returns the file path in 'data.filepath'
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    let params = {
      name: name,
      address: address,
      contact: contact,
      certificate: certificate,
      image: image,
      amount: amount,
      startingtime: startingTime,
      endingtime: endingTime,
      email: email,
      password: password,
      usertype: 1,
    };

    fetch("http://127.0.0.1:8000/api/turfregister", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSuccessMessage("Registration successful!");
          setName("");
          setAddress("");
          setContact("");
          setCertificate("");
          setImage("");
          setAmount("");
          setStartingTime("");
          setEndingTime("");
          setEmail("");
          setPassword("");
        } else {
          setErrorMessage(result.message || "Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <section className="contact bg-primary position-relative overflow-hidden">
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
              <h2 className="fs-3 text-white mb-0">Turf Owner Sign Up</h2><br />
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
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <small className="text-critical">{errors.name}</small>}
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
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
                        onChange={(e) => handleFileUpload(e, setCertificate)}
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
                        onChange={(e) => handleFileUpload(e, setImage)}
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
                        placeholder="Enter the amount per hour"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      {errors.amount && <small className="text-critical">{errors.amount}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Starting Time</label>
                      <input
                        type="time"
                        className="form-control border-0"
                        placeholder="Enter the starting time"
                        name="startingtime"
                        value={startingTime}
                        onChange={(e) => setStartingTime(e.target.value)}
                      />
                      {errors.startingtime && <small className="text-critical">{errors.startingtime}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Ending Time</label>
                      <input
                        type="time"
                        className="form-control border-0"
                        placeholder="Enter the ending time"
                        name="endingtime"
                        value={endingTime}
                        onChange={(e) => setEndingTime(e.target.value)}
                      />
                      {errors.endingtime && <small className="text-critical">{errors.endingtime}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Email</label>
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <small className="text-critical">{errors.email}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Password</label>
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && <small className="text-critical">{errors.password}</small>}
                    </div>
                  </div>
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <button
                      type="submit"
                      className="btn btn-warning w-100 border-0 text-white fs-6">
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Turf_Register;
