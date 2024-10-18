import React from 'react'


const Stats=[
	{count:'5K+', label:"Active Students"},
	{count:'10+', label:"Mentors"},
	{count:'200+', label:"Courses"},
	{count:'50+', label:"Awards"},
]

const StatsComponents = () => {



  return (
    <div className=" w-11/12 max-w-maxContent mt-10 mb-10 gap-4  flex flex-row justify-between mx-auto ">{
	Stats.map((data,index)=>(
		<div key={index} className=" w-[295px] flex flex-col gap-2 text-center">
		<h2 className="text-3xl font-semibold text-white">{data.count}</h2>
		<p className=" text-richblack-500">{data.label}</p>
	   </div>
	))
	}</div>
  )
}

export default StatsComponents