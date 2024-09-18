import React from 'react'

const HighlightText = ({text,color}) => {
  return (
	<span className='bg-gradient-to-tr from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
		{" "}
		{text}
	</span>
  )
}

export default HighlightText