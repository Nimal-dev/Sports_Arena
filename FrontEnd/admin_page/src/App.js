import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AdminHome from "./Components/Home/AdminHome";
import SignIn from "./Components/Auth/SignIn";
import React, {useState} from 'react';

function App() { const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  return (
    <>
      <BrowserRouter>
      {auth === null ? (
     <>
        <Routes>
<Route path='/' element={<SignIn/>}/>

</Routes>
     </>
  
) : auth.type === 0 ? (
  <>
  <Routes>

<Route path='/' element={<AdminHome />} />

  </Routes>
  </>
    
    ):(


      <>
      <Routes>

      <Route path='/' element={<AdminHome/>}/>
      

      </Routes>
      
      </>
    )}
      </BrowserRouter>
    </>
  );
}

export default App;
