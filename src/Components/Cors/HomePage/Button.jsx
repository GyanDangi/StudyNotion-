
import { Link } from 'react-router-dom'

const Button = ({children, active, linkto}) => {
  return (
	
	<Link to={linkto}>
		
		<div className={` select-none text-center text-[15px] px-2 py-2 rounded-md font-bold 
			${active ? " bg-yellow-50 text-black":" bg-richblack-800 text-richblack-50 border-[2px] border-richblack-700"} hover:scale-95
			 transition-all duration-200`}>
			{children}
		</div>

	</Link>
  )
}

export default Button