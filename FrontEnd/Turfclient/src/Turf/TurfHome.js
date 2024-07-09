import React,{useState} from 'react';

export default function TurfHome() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
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
              <h6 className="mb-0">{auth.name}</h6>
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

      <div className="content">
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
          <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
          </a>
          <a href="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars"></i>
          </a>
          <form className="d-none d-md-flex ms-4">
            <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
          </form>
          <div className="navbar-nav align-items-center ms-auto">
          
         
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                <span className="d-none d-lg-inline-flex">{auth.name}</span>
              </a>
              <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <a href="\profile" className="dropdown-item">My Profile</a>
                <a href="#" className="dropdown-item">Log Out</a>
              </div>
            </div>
          </div>
        </nav>


        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Salse</h6>
              <a href="#">Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Salse</h6>
              <a href="#">Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                  <tr>
                    <td><input className="form-check-input" type="checkbox" /></td>
                    <td>01 Jan 2045</td>
                    <td>INV-0123</td>
                    <td>John Doe</td>
                    <td>$123</td>
                    <td>Paid</td>
                    <td><a className="btn btn-sm btn-primary" href="#">Detail</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-4 px-4">
        <div className="bg-secondary text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Calendar</h6>
            <a href="#">Show All</a>
          </div>
          <div id="calendar"></div>
        </div>
      </div>
    </div>
  );
}
