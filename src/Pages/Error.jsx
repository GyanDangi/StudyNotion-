import React from 'react'

const Error = () => {
  return (
	<div className=" flex items-center bg-richblack-900 justify-center h-screen">
	<div className="text-center bg-richblack-800 px-10 py-10 rounded-md">
	  <h1 className="text-6xl font-bold text-[#f20f0f]    mb-4">404</h1>
	  <p className="text-xl text-[#f20f0f] mb-6">
	    Oops! The page you are looking for does not exist.
	  </p>
	  <a
	    href="/"
	    className="px-6 py-3 bg-yellow-50 text-black font-semibold rounded-md hover:bg-blue-700 hover:text-white"
	  >
	    Go Back Home
	  </a>
	</div>
   </div>
  )
}

export default Error