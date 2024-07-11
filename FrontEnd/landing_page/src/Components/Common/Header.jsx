import React, { useEffect, useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userdata');
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userdata');
    window.location.reload();
    setIsLoggedIn(false);
    // Optionally, redirect to home page or login page
  };

  return (
    <>
      <header className="main-header position-fixed w-100">
        <div className="container">
          <nav className="navbar navbar-expand-xl py-0">
            <div className="logo">
              <a className="navbar-brand py-0 me-0" href="/">
                <img src="../assets/images/logo.png" style={{width:"100px"}} alt="logo"/>
              </a>
            </div>
            <a className="d-inline-block d-lg-block d-xl-none d-xxl-none nav-toggler text-decoration-none" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
              <i className="ti ti-menu-2 text-warning"></i>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">                                             
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link text-capitalize" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-capitalize" aria-current="page" href="#hero">About us</a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                {!isLoggedIn ? (
                  <>
                    <a className="btn btn-warning btn-hover-secondery text-capitalize" href="#register">Register</a>
                    <a className="btn btn-hover-secondery text-capitalize" style={{marginLeft:"10px", backgroundColor:"#06C755", color:"white"}} href="/Login">Login</a>
                  </>
                ) : (
                  <button className="btn btn-hover-secondery text-capitalize" style={{marginLeft:"10px", backgroundColor:"#06C755", color:"white"}} onClick={handleLogout}>Logout</button>
                )}
              </div>
            </div>
          </nav>
        </div>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <div className="logo">
              <a className="navbar-brand py-0 me-0" href="#">
                <img src="../assets/images/Creato-logo.svg" alt="logo"/>
              </a>
            </div> 
            <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="ti ti-x text-warning"></i>
            </button>
          </div>
          <div className="offcanvas-body pt-0">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-capitalize" aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">Elements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#">Blog</a>
              </li>
            </ul>
            <div className="login d-block align-items-center mt-3">
              <a className="btn btn-warning text-capitalize w-100" href="#">Contact us</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
