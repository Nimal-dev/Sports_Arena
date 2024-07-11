import React, { useState } from 'react';

function Social_Register() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleFileUpload = (event) => {
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    fetch("http://127.0.0.1:8000/api/postfileupload", {
      method: "POST",
      body: formdata,
    }).then((res) => {
      res.json().then((data) => {
        setImage(data); 
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let params = {
      name: name,
      dob: dob,
      image: image,
      password: password,
      email: email,
    };

    fetch("http://127.0.0.1:8000/api/social_register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <section className="contact bg-secondary position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <small className="fs-7 d-block text-warning">Join us Now</small>
              <h2 className="fs-3 text-white mb-0">Social Media Register</h2><br />
              <h6 className="fs-5 text-white mb-0">Register to be a Part of the Social Media Team and Engage in posting awesome pictures and Latest Sports News!</h6>
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
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">D.O.B</label>
                      <input
                        type="date"
                        className="form-control border-0"
                        placeholder="Enter your Date of Birth"
                        name="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">Image <small style={{ color: "whitesmoke" }}>(Profile Picture)</small></label>
                      <input
                        type="file"
                        className="form-control border-0"
                        name="image"
                        onChange={(e) => handleFileUpload(e)}
                      />
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-warning btn-hover-secondary text-capitalize mt-2 w-auto contact-btn fs-4">
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

export default Social_Register;
