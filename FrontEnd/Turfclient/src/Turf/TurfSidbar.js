import React from 'react'

export default function TurfSidbar() {
  return (
    <div>

<div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-secondary navbar-dark">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Sportsarena</h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">John Doe</h6>
              <span>Turf</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <a href="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
            
            <a href="/viewbookings" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Slot Bookings</a>
            <a href="/paymentdetails" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Payments</a>
            {/* <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a> */}
            {/* <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a> */}
          </div>
        </nav>
      </div>

    </div>
  )
}
