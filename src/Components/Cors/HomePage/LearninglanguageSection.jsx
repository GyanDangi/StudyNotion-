import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lessson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './Button'

const LearninglanguageSection = () => {
  return (
    <div className=' mt-[130px]'>

		<div className=' flex flex-col items-center mb-32'>

			<div className=' text-center text-4xl font-semibold'>
			Your swiss knife for 
			<HighlightText text={"learning any language"}/>
			</div>
			<div className=' text-center text-richblack-600 mx-auto font-medium mt-2 w-[70%]'>
			Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
			</div>

			<div className=' flex flex-col lg:flex-row items-center mt-5'>
				<img src={know_your_progress} alt="know_your_progress" className=' object-contain  lg:-mr-32'/>
				<img src={compare_with_others} alt="compare_with_others"className='  object-contain -mt-16 lg:-mt-0' />
				<img src={plan_your_lessson} alt="plan_your_lessson" className=' object-contain lg:-ml-36 -mt-24' />

			</div>

			<div className='w-fit mt-10'>
				<CTAButton active={true} linkto={'/signup'}>
					<div className=''>
						Learn More 
					</div>
				</CTAButton>
			</div>
		</div>

    </div>
  )
}

export default LearninglanguageSection