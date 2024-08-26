import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import CTAButton from '../HomePage/Button'


const CodeBlock = ({
	position, heading, subheading, ctabtn1, ctabtn2, codeblock, codecolor, 
}) => {
	return (
		<div className={`flex code_container flex-col lg:flex-row ${position} my-20 gap-10 justify-between`}>
			
			{/* section 1 */}
			<div className=' lg:w-[50%] w-[100%] flex flex-col items-center gap-8'>
				{heading}
				<div className=' text-richblack-300 font-bold '>
					{subheading}
				</div>

				<div className=' flex gap-7 mt-7'>
					
					<CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
							<div className='flex gap-2 items-center'>
								{ctabtn1.btnText}
								<FaArrowRight/>
							</div>
					</CTAButton>

					<CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
						{ctabtn2.btnText}
					</CTAButton>

				</div>

			</div>

			{/* section:02 */}
			<div className=' h-fit flex flex-row lg:w-[50%] md:w-[100%] w-[100%] text-xl '>

				<div className=' text-center flex flex-col w-[10%] text-richblack-500 font-inter font-bold '>
					<p>1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
					<p>5</p>
					<p>6</p>
					<p>7</p>
					<p>8</p>
					<p>9</p>
					<p>10</p>
					<p>11</p>

				</div>

				<div className={`w-[90%]  flex flex-col pl-3  font-bold font-mono ${codecolor} `}>
					<TypeAnimation
						sequence={[codeblock,5000,""]}
						repeat={Infinity}
						omitDeletionAnimation={true}
						cursor={true}
						style={
							{
								whiteSpace:"pre-line",
								display:"block"
								
							}

						}
					/>
				</div>
			</div>

		</div >
		
	)
}

export default CodeBlock