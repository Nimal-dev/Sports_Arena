import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AdminHome from "./Components/Home/AdminHome";
import SignIn from "./Components/Auth/SignIn";
import React, {useState} from 'react';
import Turf_OwnerHome from "./Components/Home/Turf_OwnerHome";
import TournamentHome from "./Components/Home/TournamentHome";
import Tournamentdetails from "./Components/Home/Tournament/Tournamentdetails";
import Edittournaments from "./Components/Home/Tournament/Edittournaments";
import Addtournament from "./Components/Home/Tournament/Addtournament";

import AllTurfsView from "./Components/HomeComponents/Tables/AllTurfsView";
import AllTournamentsList from "./Components/HomeComponents/Tables/AllTournamentsList";
import Payment from "./Components/Home/Tournament/Payment";
import FeedbacksList from "./Components/HomeComponents/Tables/FeedbacksList";

function App() { const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  return (
    <>
      <BrowserRouter>
      {auth === null ? (
     <>
        <Routes>
<Route path='/' element={<SignIn/>}/>
<Route path='/' element={<SignIn/>}/>

</Routes>
     </>
  
) : auth.usertype === 0 ? (
  <>
  <Routes>

<Route path='/' element={<AdminHome />} />
<Route path='/Turf_List' element={< AllTurfsView/>} />
<Route path='/Tournament_Lists' element={< AllTournamentsList/>} />
<Route path='/Feedbacks' element={< FeedbacksList/>} />

  </Routes>
  </>
    
    ): auth.usertype === 1 ? (
      <>
      <Routes>
    
    <Route path='/' element={<Turf_OwnerHome />} />
    
      </Routes>
      </>
        
        ): auth.usertype === 4 ? (
          <>
          <Routes>
        
        <Route path='/' element={<TournamentHome />} />
        <Route path='/viewtournament' element={<Tournamentdetails />} />
        <Route path='/editTournament' element={<Edittournaments />} />
        <Route path='/addtournament' element={<Addtournament />} />
        <Route path='/Turf_List' element={< AllTurfsView/>} />
        <Route path='/Tournament_Lists' element={< AllTournamentsList/>} />
        <Route path='/Create_Tournament' element={< Addtournament/>} />
        <Route path='/payment' element={< Payment/>} />
       


          </Routes>
        
          </>
            
            ):(


      <>
      <Routes>

      <Route path='/' element={<SignIn/>}/>
      

      </Routes>
      
      </>
    )}
      </BrowserRouter>
    </>
  );
}

export default App;
