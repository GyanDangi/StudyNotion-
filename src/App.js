import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useState } from "react";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Navbar from './Components/Cors/Common/Navbar'


function App() {

  const [isLoggedIn,setLoggedIn]= useState(false);
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/> 
        </Routes>
    </div>
  );
}

export default App;
