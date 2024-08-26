import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from "react-icons/fa";
const InstructorSection = () => {
  return (
    <div>

		<div className=' flex flex-row gap-20 items-center mt-16'>

			<div className=' w-[50%] '>
				<img src={Instructor} alt="Instructor " className='InstructorShadow' />
			</div>

			<div className=' flex flex-col w-[50%] gap-2 items-start'>
				<div className=' text-white text-4xl font-bold text-left w-[50%]'>
					Become an 
					<HighlightText text={"Instuctor"}/>
				</div>
				<p className=' text-richblack-300 text-base'>
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