import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin_Header() {
    const navigate = useNavigate();
    const [usertype, setUsertype] = useState(null);
    const [name, setName] = useState('');


   


    useEffect(() => {
        const userdata = JSON.parse(localStorage.getItem('userdata'));
        if (userdata && userdata._id) {
          setUsertype(userdata.usertype);
          if (userdata.usertype === 1) {
            setName(userdata.email);
          } else if (userdata.usertype === 2) {
            setName(userdata.volunteername);
          } else if (userdata.usertype === 3) {
            setName(userdata.volunteername);
          }else if (userdata.usertype === 4) {
            setName(userdata.email);
          }
          else {
            setName(userdata.email);
          }
        }
    
      }, []);


      console.log(usertype);
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


    const handleLogout = () => {
        localStorage.removeItem('userdata');
        navigate('/');
      };
  return (
    <>
     <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </a>
               
                <div class="navbar-nav align-items-center ms-auto"/>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            {/* <img class="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/> */}
                            <span class="d-none d-lg-inline-flex">{getUsertypeLabel()}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            
                            <a onClick={handleLogout} href="" class="dropdown-item">Log Out</a>
                        </div>
                    </div>
                
            </nav>
    </>
  )
}

export default Admin_Header