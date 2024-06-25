import React from 'react'

function User_Register() {
  return (
    <>
     <section class="contact bg-primary position-relative overflow-hidden">
        <div class="container position-relativell">
            <div class="dots-shape-left position-absolute"><img src="../assets/images/icons/dot-shape.png"/></div>
            <div class="dots-shape-right position-absolute"><img src="../assets/images/icons/dot-shape.png"/></div>
            <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                    <small class="fs-7 d-block text-warning">Join us Now</small>
                    <h2 class="fs-3 text-white mb-0">Ready to try the product for free?</h2>
                    <div class="owl-carousel owl-theme testimonial">
                        <div class="item">
                            <div class="details position-relative">
                                <p class="fs-5 fw-light blue-light mb-4">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece”
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="avtar-img rounded-circle overflow-hidden"><img src="../assets/images/contact/testimonial-image.png" class="img-fluid"/></div>
                                    <div class="name ps-3">
                                        <h6 class="text-white">Merky Lester</h6>
                                        <small class="d-block blue-light fw-500 fs-10 pb-0">Managers</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="details position-relative">
                                <p class="fs-5 fw-light blue-light mb-4">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece”
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="avtar-img rounded-circle overflow-hidden"><img src="../assets/images/contact/testimonial-image.png" class="img-fluid"/></div>
                                    <div class="name ps-3">
                                        <h6 class="text-white">Merky Lester</h6>
                                        <small class="d-block blue-light fw-500 fs-10 pb-0">Managers</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                        
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                    <form class="position-relative">
                        <div class="row ps-xxl-5 ps-xl-5 ps-lg-3 ps-md-0 ps-sm-0 ps-0">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                    <label class="form-label text-white fs-7 mb-3">Full Name</label>
                                    <input type="text" class="form-control border-0" placeholder="Enter your name"/>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group">
                                    <label class="form-label text-white fs-7 mb-3">User Name</label>
                                    <input type="text" class="form-control border-0" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label class="form-label text-white fs-7 mb-3">Email address</label>
                                    <input type="email" class="form-control border-0" placeholder="Enter your email address"/>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label class="form-label text-white fs-7 mb-3">Email Password</label>
                                    <input type="text" class="form-control border-0" placeholder="Enter your password"/>
                                </div>
                            </div>
                            
                            <div class="agree fs-7 fw-500">
                                By clicking on the Sign Up button, you agree to Rakon.<br/><a href="#" class="text-warning text-decoration-none">terms and conditions of use.</a>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-warning btn-hover-secondery text-capitalize mt-2 w-auto contact-btn">Try for Free</button>
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

export default User_Register