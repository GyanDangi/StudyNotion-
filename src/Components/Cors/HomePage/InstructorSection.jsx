import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = () => {
  return (
    <div>

		<div className=' flex flex-col lg:flex-row md:flex-col gap-20 items-center mt-16'>

			<div className=' w-[100%] object-fit lg:object-cover lg:w-[50%]   lg:shadow '>
				<img src={Instructor} alt="Instructor " className='lg:shadow-[-25px_-25px_0px_rgba(250,250,250,0.7)] shadow-none' />
			</div>

			<div className=' flex flex-col w-[100%] lg:w-[50%] gap-2 items-start'>
				<div className=' text-white text-4xl font-bold text-left w-[50%]'>
					Become an 
					<HighlightText text={"Instuctor"}/>
				</div>
				<p className=' text-richblack-300 text-lg font-bold space-y-2 lg:text-base w-[100%]'>
				Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
				</p>
				<div className=' mt-[60px]'>
					<CTAButton active={true} linkto={'/signup'}>
						<div className=' flex flex-row items-center gap-5'>
							<p>Start teaching Today</p>
							<FaArrowRight/>
						</div>
					</CTAButton>
				</div>
			</div>
		</div>

    </div>
  )
}

export default InstructorSection