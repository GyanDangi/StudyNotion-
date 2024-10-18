import React from 'react'
import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import {apiConnector} from '../../services/apiConnector'
import { contactusEndpoint } from '../../services/apis';
import countryCode from "../../data/countrycode.json"
import { toast } from 'react-hot-toast';
const ContactUsForm = () => {

  const [loading , setLoading]= useState(false);

  const {register,
    handleSubmit,
     reset,
     formState:{errors,isSubmitSuccessful}, }=useForm();

  const submitContactForm = async(data)=>{
    console.log("Loging Data",data);
    const toastId = toast.loading("Loading...")
    try {
      setLoading(true);
      const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
      console.log("logging Reponse",response)
      toast.success("Message Sent Successfully");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
    toast.dismiss(toastId)
  }
    useEffect(() => {
      if(isSubmitSuccessful){
        reset({
          email:"",
          firstName:"",
          lastName:"",
          message:"",
          phoneNumber:"",
        })
      }
  
    }, [reset,isSubmitSuccessful]);
  return (
    <div>

      <form onSubmit={handleSubmit(submitContactForm)} >

      <div className=' flex gap-3' >
        {/* FirstName: */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="firstName">First Name</label>
          <input type="text"
          name='firstName'
          id='firstName'
          placeholder='Enter First Name' 
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
          {...register("firstName",{required:true})}/>
          {
          errors.firstName && (
            <span className='text-pink-500'>Please Enter your firstName</span>
          )}
        </div>
        {/* lastName: */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="lastName">Last Name</label>
          <input type="text"
          name='lastName'
          id='lastName'
          placeholder='Enter Last Name' 
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
          {...register("lastName")}/>
        </div>
      </div>
    

    {/* Email */}
      <div className=' flex flex-col mt-3 gap-2'>
        <label htmlFor="email">Email</label>
        <input type="email" 
        name='email'
        id='email'
        placeholder='Enter Email Address'
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        {...register('email',{required:true})}/>
        {
        errors.email &&(
          <span className='text-pink-500' >please enter your email address</span>
        )
        }
      </div>

      <div className='flex flex-col mt-3 gap-2'>
        <label htmlFor="phoneNumber">Phone Number</label>
        <div className=' flex flex-row gap-4 justify-between'>
          {/* dropDown */}
          <div className=''>
            <select name="dropdown" id="dropdown" defaultValue={+91}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-[100px] rounded-md bg-richblack-800 p-[13px]  text-richblack-5"
            {...register("countryCode",{required:true,})}
            >
              {
              countryCode.map((element,index)=>(
                  <option key={index} value={element.code}>{element.code}-{element.country}</option>
              ))
              }
            </select>
          </div>

          <div className=' flex flex-col gap-2 w-full'>
            <input type="text" 
            name='phoneNumber'
            id='phoneNumber'
            placeholder='12345 67890'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className=" rounded-md bg-richblack-800 p-[12px]  text-richblack-5"
            {...register("phoneNumber",{required:{value:true, message:"Pleae enter phone Number"},
            maxLength:{value:12,message:"Invalid Phone Number"},
            minLength:{value:8,message:"Invalid Phone Number"}})}/>
          </div>
          {errors.phoneNumber && (
            <span className='text-pink-600'>{errors.phoneNumber.message}</span>
          )}

        </div>
      </div>

      {/* Message: */}
    <div className='flex flex-col gap-2 mt-3
    '>
      <label htmlFor="message">Message</label>
      <textarea 
      name="message" 
      id="message" 
      cols="30"
      rows="7"
      placeholder='Enter your message here'
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
      {...register("message",{required:true})}
      
      ></textarea>
      {
      errors.message &&(
        <span className='text-pink-500'>Please Enter your message</span>

      )}
    </div>
    {/* submit Button */}
    <button
     disabled={loading}
     type="submit"
     className={`rounded-md w-full mt-3 bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
      ${
        !loading &&
        "transition-all duration-200 hover:scale-95 hover:shadow-none"
      }  disabled:bg-richblack-500 sm:text-[16px] `}>Send Message</button>

      </form>

    </div>
  )
}

export default ContactUsForm