import React from 'react'
import HighlightText from './../HomePage/HighlightText';
import CTAButton from '../HomePage/Button'
const LearningGridArray = [
	{
	  order: -1,
	  heading: "World-Class Learning for",
	  highlightText: "Anyone, Anywhere",
	  description:
	    "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
	  BtnText: "Learn More",
	  BtnLink: "/",
	},
	{
	  order: 1,
	  heading: "Curriculum Based on Industry Needs",
	  description:
	    "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
	},
	{
	  order: 2,
	  heading: "Our Learning Methods",
	  description:
	    "Studynotion partners with more than 275+ leading universities and companies to bring",
	},
	{
	  order: 3,
	  heading: "Certification",
	  description:
	    "Studynotion partners with more than 275+ leading universities and companies to bring",
	},
	{
	  order: 4,
	  heading: `Rating "Auto-grading"`,
	  description:
	    "Studynotion partners with more than 275+ leading universities and companies to bring",
	},
	{
	  order: 5,
	  heading: "Ready to Work",
	  description:
	    "Studynotion partners with more than 275+ leading universities and companies to bring",
	},
   ];

const LearningGrid = () => {
  return (
    <div className=" grid mx-auto grid-cols-1 gap-0 lg:grid-cols-4 mb-10 w-11/12 max-w-maxContent mt-10   ">

	{
	LearningGridArray.map((card,index)=>(
		<div key={index}
		className={`${index===0 && "lg:col-span-2 bg-transparent"}
		${card.order%2===1 ? "bg-[#2C333F]":"bg-[#161D29]"}
		${card.order===3 && "lg:col-start-2"}
		`}
		>
			{
				card.order<0 ?(<div className="flex flex-col gap-12 items-start" >
					<div className="flex flex-col gap-1">
						<h1 className="text-white text-3xl font-semibold">{card.heading}</h1>
						<h1 className="text-3xl"><HighlightText  text={card.highlightText}/></h1>
						<p className="text-[#838894] mb-3 mt-2">{card.description}</p>
					</div>
					<div>
					<CTAButton active={true} linkto={card.BtnLink}>{card.BtnText}</CTAButton>
					</div>
					
					
				</div>):(<div className="h-[250px] w-[250px] p-8 flex flex-col items-start gap-8">
					<h1 className=" text-white mt-3">{card.heading}</h1>
					<p className="text-[#AFB2BF] text-sm">{card.description}</p>
				</div>)
			}
		</div>
	))
	}

    </div>
  )
}

export default LearningGrid