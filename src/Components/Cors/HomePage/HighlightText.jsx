import React from 'react'

const HighlightText = ({text}) => {
  return (
	<span className=' text-caribbeangreen-50 font-bold
	--tw-gradient-from: inherit var(--tw-gradient-from-position)'>
		{" "}
		{text}
	</span>
  )
}

export default HighlightText