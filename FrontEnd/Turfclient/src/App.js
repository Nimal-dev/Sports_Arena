import './App.css'
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TurfHome from './Turf/TurfHome';
import TurfSidbar from './Turf/TurfSidbar';
import TurfHeader from './Turf/TurfHeader';
import ViewTurf from './Turf/ViewTournament';
import TurfRegistration from './Turf/TurfRegistration';
import TurfLogin from './Turf/TurfLogin';
import PaymentDetails from './Turf/PaymentDetails';
import ViewTournament from './Turf/ViewTournament';
import Profile from './Turf/Profile';
import ProfileUpdate from './Turf/ProfileUpdate';

function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  return (
    <>
      <BrowserRouter>
      {auth === null ? (
     <>
        <Routes>

<Route path='/home' element={<TurfHome />} />
<Route path='/turfregistration' element={<TurfRegistration/>}/>
<Route path='/' element={<TurfLogin/>}/>

</Routes>
     </>
  
) : auth.type === 0 ? (
  <>
  <Routes>

<Route path='/' element={<TurfHome />} />
<Route path='/paymentdetails' element={<PaymentDetails/>}/>
<Route path='/sidebars' element={<TurfSidbar/>}/>
<Route path='/headers' element={<TurfHeader/>}/>
<Route path='/viewbookings' element={<ViewTournament/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/proileupdate' element={<ProfileUpdate/>}/>
  </Routes>
  </>
    
    ):(


      <>
      <Routes>

      <Route path='/' element={<TurfRegistration/>}/>
      <Route path='/login' element={<TurfLogin/>}/>

      </Routes>
      
      </>
    )}
      </BrowserRouter>
    </>
  );
}

export default App;
