import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
import HighlightText from '../HomePage/HighlightText'
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";

const tabName=[
	"Free",
	"New to coding",
	"Most popular",
	"Skills paths",
	"Career paths"
]
const ExploreMore = () => {

		const [currentTab, setCurrentTab]= useState(tabName[0])
		// const [currentTab, setCurrentTab]= useState(HomePageExplore[0].tag)
		const [courses,setCourses]= useState(HomePageExplore[0].courses);
		const [currentCard, setCurrentCard]= useState(HomePageExplore[0].courses[0].heading);

		const setMyCard =(value)=>{
			setCurrentTab(value);
			// free wala course , new to coding in sab  course ke basis pr filter krnege
			const courseValueChange =HomePageExplore.filter((course)=>course.tag===value);
			setCourses(courseValueChange[0].courses);
			setCurrentCard(courseValueChange[0].courses[0].heading)
		}

  return (



    <div className='w-[100%] max-w-maxContent'>

		<div className=' flex flex-col mx-auto items-center relative '>
			<div className='text-4xl font-bold text-center'>
				Unlock the <HighlightText text={"Power of Code"}/>
			</div>
			<p className=' text-center text-richblack-300 mt-2'>Learn to build Anything you can Imagine</p>

			<div className=' flex flex-row lg:mb-[300px] lg:flex-row mt-6 px-1 py-1 lg:px-2 lg:py-2 gap-2 bg-richblack-800 rounded-full text-center  items-center select-none'>
				{
					tabName.map((element, index)=>{
						return (
							<div key={index}
							onClick={()=>setMyCard(element)}
							className={`text-[16px] w-fit items-center px-4 py-1 rounded-full transition-all duration-200 cursor-pointer hover:scale-105
							${currentTab=== element ? "bg-richblack-900 text-white font-medium" : "bg-richblack-800"}`}>
								{element}
							</div>
						)
					})
				}
			</div>
			{/* Course Card */}
			<div className={` lg:absolute lg:top-[40%] lg:bottom-[70%] lg:translate-y-[150%] flex flex-col  lg:flex-row lg:gap-14 gap-4 mt-10 mb-10 `}>
				{
					courses.map((element, index)=>(
						<div  key={index} 
						
						className={` hover:bg-richblack-25 transition-all hover:shadow-[15px_15px_rgba(210,210,0,0.7)] group  duration-200  w-[470px] h-[350px] md:w-[300px] md:h-[300px] flex flex-col px-5 justify-between mt-5 rounded-md bg-richblack-800`}>
							<div className=' flex flex-col mt-5 gap-4'>
								<p className=' group-hover:text-richblack-900 font-bold'>{element.heading}</p>
								<p className=' text-richblack-300 group-hover:text-richblack-700'>{element.description}</p>
							</div>
							<div className=' flex group-hover:text-blue-300 flex-row mb-3  text-richblack-300 pt-3 border-dashed justify-between border-t-2 border-richblack-700 '>
								<div className=' flex flex-row gap-2 items-center'>
									<FaUserGroup />
									<p>{element.level}</p>
								</div>
								<div className=' flex flex-row gap-2 hover:text-blue-200'>
									<ImTree />
									<p>{element.lessionNumber} Lessons</p>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>

    </div>
  )
}

export default ExploreMore