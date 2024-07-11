import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Components/Home/LandingPage";
import User_Register from "./Components/Auth/User_Register";
import Turf_Register from "./Components/Auth/Turf_Register";
import Host_Register from "./Components/Auth/Host_Register";

import Social_Register from "./Components/Auth/Social_Register";
import { useState } from "react";
import Login from "./Components/Auth/Login";
import UserHomePage from "./Components/Home/UserHomePage";
import UserTurfView from "./Components/Home_components/UserHomeComponents/UserTurfView";
import UserTourneyView from "./Components/Home_components/UserHomeComponents/UserTourneyView";
import Post from "./Components/Home/Post";
import UserSocialMediaView from "./Components/Home_components/UserHomeComponents/UserSocialMediaView";
import Profile from "./Components/Home_components/UserHomeComponents/Profile";
import Feedback from "./Components/Home_components/UserHomeComponents/Feedback";



function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")))
  return (


    <BrowserRouter>
      {auth === null ? (
     <>
        <Routes>
        <Route path="/" element={<LandingPage/>} />
    <Route path="/Login" element={<Login/>} />



    {/* -----------Register Page Routes Start------------- */}

    <Route path="/User_Register" element={<User_Register/>} />
    <Route path="/Turf_Register" element={<Turf_Register/>} />
    <Route path="/Host_Register" element={<Host_Register/>} />
    <Route path="/Social_Register" element={<Social_Register/>} />

    {/* -----------Register Page Routes End------------- */}
</Routes>
     </>
  
) : auth.usertype === 3 ? (
  <>
  <Routes>

<Route path='/' element={<UserHomePage />} />
<Route path='/Turfs_view' element={<UserTurfView />} />
<Route path='/Tounament_View' element={<UserTourneyView/>} />
<Route path='/UserSocialMediaView' element={<UserSocialMediaView/>} />
<Route path='/ViewDetails' element={<Profile/>} />
<Route path='/addfeedback' element={<Feedback/>} />

  </Routes>
  </>
    
    ):auth.usertype === 2 ? (
      <>
      <Routes>
    
    <Route path='/' element={<Post />} />
    
    
      </Routes>
      </>
        
        ):(


      <>
      <Routes>

      <Route path='/' element={<LandingPage/>}/>
      

      </Routes>
      
      </>
    )}
      </BrowserRouter>


    // <BrowserRouter>
    // <Routes>

    // <Route path="/" element={<LandingPage/>} />
    // <Route path="/Login" element={<Login/>} />



    // {/* -----------Register Page Routes Start------------- */}

    // <Route path="/User_Register" element={<User_Register/>} />
    // <Route path="/Turf_Register" element={<Turf_Register/>} />
    // <Route path="/Host_Register" element={<Host_Register/>} />
    // <Route path="/Social_Register" element={<Social_Register/>} />

    // {/* -----------Register Page Routes End------------- */}
    //   </Routes>
    //   </BrowserRouter>
  );
}

export default App;
