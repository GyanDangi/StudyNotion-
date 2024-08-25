import React from 'react'

import logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import TimelineImage from '../../../assets/Images/TimelineImage.png'

const TimelineSection = () => {

	const timeline =[
		{
			Logo:logo1,
			heading:"leadership",
			description:"fully committed to the success company",
			
		},
		{
			Logo:logo2,
			heading:"leadership",
			description:"fully committed to the success company",

		},
		{
			Logo:logo3,
			heading:"leadership",
			description:"fully committed to the success company",

		},
		{
			Logo:logo4,
			heading:"leadership",
			description:"fully committed to the success company",

		}
	]

  return (
    <div >
	
		<div className=' flex flex-row  gap-7 items-center '>

			{/* LEft box */}
			<div className=' w-[40%] flex flex-col gap-6'>
				{
					timeline.map((element, index)=>{
						return (
							<div className=' flex flex-row gap-6' key={index}>
								
								<div className=' w-[50px] h-[50px] flex bg-white items-center '>
									<img src={element.Logo} alt="" />
								</div>

								<div className=' flex flex-col '>
									<h2 className=' font-semibold text-[18px]'>{element.heading}</h2>
									<h2 className=' text-base'>{element.description}</h2>

								</div>

							</div>
						)
					})
				}
			</div>

			{/* Right Box */}
			<div className=' relative'>
				<img className=' rounded-md h-fit object-cover' src={TimelineImage} alt="timelineImage" />
				<div className=' flex flex-row  absolute bg-caribbeangreen-700 text-white uppercase  py-7 items-center
						  left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md'>
					<div className=' flex flex-row gap-5 items-center border-r-4 border-caribbeangreen-200 px-7'>
						<p className=' font-bold text-3xl'>10</p>
						<p className=' text-caribbeangreen-200 text-sm text-left'>Years of Experience</p>
					</div>
					<div className=' flex flex-row gap-5 items-center px-7'>
						<p className=' font-bold text-3xl'>250</p>
						<p className=' text-left w-20 text-caribbeangreen-200 text-sm'>Types of Courses</p>
					</div>
				</div>
			</div>

		</div>

    </div>
  )
}

export default TimelineSection