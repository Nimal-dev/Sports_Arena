import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Admin_Sidebar() {
    const [name, setName] = useState("");
  const [usertype, setUsertype] = useState(null);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    setUsertype(userdata.usertype);
    
    if (userdata && userdata._id) {
     
      if (userdata.usertype === 1) {
        setName(userdata.statename); // Set the statename for state user
      } else if (userdata.usertype === 2) {
        setName(userdata.volunteername);
      } else if (userdata.usertype === 3) {
        setName(userdata.volunteername);
      }else if (userdata.usertype === 4) {
        setName(userdata.email);
      }else {
        setName(userdata.email); // Set the fullname for other users
      }
    }
  }, []);

  const getUsertypeLabel = () => {
    switch (usertype) {
      case 0:
        return "Admin";
      case 1:
        return "Turf Owner";
      case 2:
        return "Volunteer";
      case 3:
        return "User";
        case 4:
        return "Tourney Host";
      default:
        return "";
    }
  };
  const getDashboardLink = () => {
    switch (usertype) {
      case 0:
        return "/";
      case 1:
        return "/";
      case 2:
        return "/";
      case 3:
        return "/";
      default:
        return "/";
    }
  };

  const getUsertypeIcon = (usertype) => {
    switch (usertype) {
      case 0:
        return "fa-user-secret"; // Admin icon
      case 1:
        return "fa-building"; // State icon
      case 2:
        return "fa-hands-helping"; // Volunteer icon
      case 3:
        return "fa-user"; // User icon
      default:
        return "fa-user"; // Default icon
    }
  };
  return (

    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-secondary navbar-dark">
            <a href="index.html" class="navbar-brand mx-4 mb-3">
                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>SPORT <b>X</b></h3>
            </a>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="position-relative">
                <i className={`fa ${getUsertypeIcon(usertype)} fa-2x me-2`}></i>
                    
                </div>
                <div class="ms-3">
                    <h6 class="mb-0">{name}</h6>
                    <span>{getUsertypeLabel()}</span>
                </div>
            </div>
            <div class="navbar-nav w-100">
            {usertype === 0 && (
            <>
              <NavLink
                exact
                to={getDashboardLink()}
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </NavLink>

              <NavLink
                exact
                to="/Turf_List"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bell me-2"></i>Turf List
              </NavLink>

              <NavLink
                exact
                to="/Tournament_Lists"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bell me-2"></i>Tournament List
              </NavLink>
              <NavLink
                exact
                to="/Feedbacks"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bell me-2"></i>FeedBacks
              </NavLink>
            </>
          )}
          {usertype === 1 && (
            <>
              <NavLink
                exact
                to={getDashboardLink()}
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </NavLink>

              {/* <NavLink
                exact
                to="/Bookings"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bell me-2"></i>Bookings
              </NavLink>

              <NavLink
                exact
                to="/ResourceRequests"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bell me-2"></i>Resource Requests
              </NavLink> */}
            </>
          )}
          {usertype === 2 && (
            <>
              <NavLink
                exact
                to={getDashboardLink()}
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </NavLink>

              <NavLink
                exact
                to="/HelpRequests"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-bell me-2"></i>Help Requests
              </NavLink>
            </>
          )}
          {usertype === 3 && (
            <>
              <NavLink
                exact
                to={getDashboardLink()}
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Home Page
              </NavLink>
            </>
          )}
          {usertype === 4 && (
            <>
              <NavLink
                exact
                to={getDashboardLink()}
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </NavLink>
              <NavLink
                exact
                to="/Turf_List"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Turf List
              </NavLink>
              <NavLink
                exact
                to="/Tournament_Lists"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-tachometer-alt me-2"></i>Tournament List
              </NavLink>
              {/* <NavLink
                exact
                to="/Payments"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-credit-card me-2"></i>Payment
              </NavLink> */}
              <NavLink
                exact
                to="/Create_Tournament"
                className="nav-item nav-link"
                activeClassName="active"
              >
                <i className="fa fa-credit-card me-2"></i>Create Tournaments
              </NavLink>
            </>
          )}
          
               
                
            </div>
        </nav>
    </div>

  )
}

export default Admin_Sidebar