import React from 'react'

function Host_Register() {
  return (
    <>
    <section className="contact bg-black position-relative overflow-hidden"style={{height:"100vh", alignContent:"center"}}>
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
            <h2 className="fs-3 text-white mb-0">Tournament Hoster Sign Up</h2><br/>
            <h6 className="fs-4 text-white mb-0">Register to be a Tournament hoster!</h6>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
            <form className="position-relative">
              <div className="row ps-xxl-5 ps-xl-5 ps-lg-3 ps-md-0 ps-sm-0 ps-0">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label className="form-label text-white fs-7 mb-3">Full Name</label>
                    <input type="text" className="form-control border-0" placeholder="Enter your name"/>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label className="form-label text-white fs-7 mb-3">User Name</label>
                    <input type="text" className="form-control border-0" placeholder="Enter your username"/>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label text-white fs-7 mb-3">Email address</label>
                    <input type="email" className="form-control border-0" placeholder="Enter your email address"/>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label text-white fs-7 mb-3">Email Password</label>
                    <input type="text" className="form-control border-0" placeholder="Enter your password"/>
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
  )
}

export default Host_Register