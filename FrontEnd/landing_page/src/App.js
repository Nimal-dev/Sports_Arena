import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Components/Home/LandingPage";
import User_Register from "./Components/Auth/User_Register";
import Turf_Register from "./Components/Auth/Turf_Register";
import Host_Register from "./Components/Auth/Host_Register";
import Login from "./Components/Auth/Login";



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/Login" element={<Login/>} />



    {/* -----------Register Page Routes Start------------- */}

    <Route path="/User_Register" element={<User_Register/>} />
    <Route path="/Turf_Register" element={<Turf_Register/>} />
    <Route path="/Host_Register" element={<Host_Register/>} />

    {/* -----------Register Page Routes End------------- */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
