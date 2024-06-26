import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AdminHome from "./Components/Home/AdminHome";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AdminHome/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
