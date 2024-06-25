import React from 'react'

function HeroSection() {
  return (
    <>
     <section class="hero-banner position-relative overflow-hidden">
        <div class="container">
            <div class="row d-flex flex-wrap align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="position-relative left-hero-color">
                        <h1 class="mb-0 fw-bold">
                            Discover The Sports Turf Near You!
                        </h1>
                        <p>The Turf Booking you love.</p>
                        {/* <a href="#" class="btn btn-warning btn-hover-secondery"><span class="d-inline-block me-2"><i class="ti ti-playstation-triangle"></i></span> Discover this Video</a> */}
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="position-relative right-hero-color">
                        <img src="../assets/images/turf.avif" style={{borderRadius:"20px"}} class="img-fluid"/> 
                    </div>          
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroSection