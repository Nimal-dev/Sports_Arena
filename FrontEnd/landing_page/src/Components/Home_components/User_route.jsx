import React from 'react'

function User_route() {
  return (
    <>
     <section class="pricing position-relative overflow-hidden" >
        <div class="container position-relative">
            <div class="row justify-content-center" id="register">
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    {/* <small class="fs-7 d-block">View</small> */}
                    {/* <h2 class="fs-3 pricing-head text-black mb-0 position-relative">Who you want to Register as?</h2> */}
                </div>
            </div>
           {/* ---------------------------------Turf Owner register------------------------------------ */}
            <div class="row justify-content-center price-plan" >
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="card position-relative shadow border-0 h-70">
                        <div class="card-body pb-4">
                            {/* <small class="fs-7 d-block text-warning text-center">Turf Owner</small> */}
                            <h2 class="mb-4 text-center position-relative"><sub class="fs-2 text-black">Social Media</sub></h2>
                            
                            <p class="fs-7 text-center fw-500">View the social media to see what's happening</p>
                            
                        </div>
                        <div class="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                            <a href="/UserSocialMediaView" class="btn btn-warning btn-hover-secondery text-capitalize">Open Social Media</a>
                        </div>
                    </div>
                </div>
           {/* ---------------------------------User register------------------------------------ */}
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="card position-relative shadow border-0 h-90">
                        {/* <div class="position-absolute badge bg-warning d-inline-block mx-auto">
                            User
                        </div> */}
                        <div class="card-body pb-4">
                            {/* <small class="fs-7 d-block text-warning text-center">User</small> */}
                            <h2 class="mb-4 text-center position-relative"><sub class="fs-3 text-black"> View all Turfs</sub></h2>
                            
                            <p class="fs-7 text-center fw-500">View all the turfs for your game to start</p>
                           
                        </div>
                        <div class="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                            <a href="/Turfs_view" class="btn btn-warning btn-hover-secondery text-capitalize">View </a>
                        </div>
                    </div>
                </div>
           {/* ---------------------------------Turf Owner register------------------------------------ */}
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="card position-relative shadow border-0 h-70">
                        <div class="card-body pb-4">
                            
                            <h2 class="mb-4 text-center position-relative"><sub class="fs-2 text-black">Tourneys</sub></h2>
                           
                            <p class="fs-7 text-center fw-500">View the Tournaments happening now!</p>
                            
                        </div>
                        <div class="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                            <a href="/Tounament_View" class="btn btn-warning btn-hover-secondery text-capitalize">View Now</a>
                        </div>
                    </div>
                </div>


           {/* ---------------------------------Social Media register------------------------------------ */}
                {/* <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                    <div class="card position-relative shadow border-0 h-70">
                        <div class="card-body pb-4">
                            
                            <h2 class="mb-4 text-center position-relative"><sub class="fs-2 text-black">Social Media Register</sub></h2>
                           
                            <p class="fs-7 text-center fw-500">Are you a Social Media handler? Then register here to be a part of the team.</p>
                            
                        </div>
                        <div class="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                            <a href="/Social_Register" class="btn btn-warning btn-hover-secondery text-capitalize">Register Now</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default User_route