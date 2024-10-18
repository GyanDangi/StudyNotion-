import React, { useState ,useEffect} from 'react'
import { BiArrowBack } from 'react-icons/bi';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { IoTimer } from "react-icons/io5";
// import { Form } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';


const VerifyEmail = () => {

	const {loading,signupData}= useSelector((state)=>state.auth);
	const [otp,setOtp]= useState("");
	const dispatch= useDispatch();
	const navigate = useNavigate();

	useEffect(() => {

		if(!signupData){
			navigate("/signup");
		}
		
	}, []);

	const handleOnSubmit=(e)=>{
		e.preventDefault();
		const {
			accountType,
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		}=signupData;
		dispatch(signUp(accountType,
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			otp,
			navigate));
	}


  return (
    <div className=" h-screen max-w-maxContent  mx-auto w-[508px] flex flex-col  items-center justify-center text-white gap-4">
	{
	
		loading ? 
		(<div>Loading...</div>)
		:(<div>
			<h1>Verify Email</h1>
			<p>A verification code has been sent to you. Enter the code below</p>
			<form onSubmit={handleOnSubmit} >
				<OTPInput
				value={otp}
				onChange={setOtp}
				numInputs={6}
				
				renderInput={(props)=> <input {...props} placeholder="-" 
				className='bg-[#161D29] w-full mx-2 text-center p-3 mt-3 rounded-md'
				style={{
							boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
						   }}/>}
				/>
				<button
				 type="submit"
				 className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
				 >Verify Email</button>
			</form>
			<div className="flex flex-row justify-between">
			<NavLink className=" ml-3  flex flex-row items-center gap-2" to='/login'>
					<BiArrowBack />
					<p>Back to Login</p>
			</NavLink>
			<button onClick={()=>dispatch(sendOtp(signupData.email,navigate))} className="flex  flex-row gap-2 items-center text-blue-200">
			    <IoTimer />
				Resend It 
			</button>
			</div>
			
		</div>)
	
	
	}
	</div>
  )
}

export default VerifyEmail