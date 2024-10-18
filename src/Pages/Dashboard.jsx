import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from './../Components/Cors/Dashboard/Sidebar';

const Dashboard = () => {

  const {loading:authLoading} = useSelector((state)=>state.auth);
  const {loading:profileLoading} = useSelector((state)=>state.profile);

  if(profileLoading || authLoading){
    return (
      <div className='mt-12'>Loading...</div>
    )
  }

  return (
    <div className=' ml-2 relative gap-5 mr-10 flex h-full bg-richblack-900'>
      <Sidebar/>
      <div className='h-full w-full'>
          <div>
            <Outlet/>

          </div>
      </div>

    </div>
  )
}

export default Dashboard