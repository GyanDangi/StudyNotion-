import React from 'react'
import {  useNavigate } from 'react-router-dom';
const Error = () => {

	const navigate = useNavigate();
	const BackHandler =()=>{
		navigate(-1);
	}
  return (
	<div className=" flex items-center bg-richblack-900 justify-center h-screen">
	<div className="text-center bg-richblack-800 px-10 py-10 rounded-md">
	  <h1 className="text-6xl font-bold text-[#f20f0f] mb-4">Error-404</h1>
	  <p className="text-xl text-white mb-6">
	    Oops! The page you are looking for does not exist.
	  </p>
	  <button 
	  onClick={BackHandler}
	  className="px-6 py-3 bg-yellow-50 text-black font-semibold rounded-md hover:bg-richblack-600 hover:text-white">
		 Back
	  </button>
	   
	</div>
   </div>
  )
}

export default Error