const otpgenerator = require("otp-generator");
const User = require("../Models/user");
const OTP = require("../Models/otp");
const Profile= require('../Models/Profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const mailSender = require("../Utils/mailSender");
require("dotenv").config();



// otp send:
exports.sendOTP = async (req, res) => {
  try {
    // step:01
    const { email } = req.body;

    // step:02
    const userPresent = await User.findOne({ email });
    if (!userPresent) {
      res.status(400).json({
        success: false,
        message: "User alredy registored",
      });
    }

    // step:03 user not exits: then generate otp:

    var otp = otpgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // step:04 check where otp is unique or not:
    const result = await OTP.findOne({ otp: otp });
	console.log("Result is Generate OTP Func");
		console.log("OTP", otp);
		console.log("Result", result);

    while (result) {
      otp = otpgenerator(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    }

    // otp ki entry store in database:
    const otppayload = { email, otp };
    const otpBody = await OTP.create(otppayload);
    console.log("OTP Body",otpBody);

    res.status(200).json({
      success: true,
      message: "OTP sent Successfully",
      otp,
    });
  } catch (error) {
	console.error(error);
	console.log(error)
	res.status(501).json({
		success:false,
		message:error.message	
	})
  }
};

// signup:


exports.signUp = async(req,res)=>{
	try {

		//data fetch from req body:

		const {
			firstName,
			lastName,
			email,
			phoneNumber,
			password,
			confirmpassword,
			accountType,
			otp
		} = req.body

		// step:02 validate the data receivd
		if(!firstName || !lastName ||!email ||!password ||!confirmpassword || !otp){
			res.status(403).json({
				success:false,
				message:"Fill all the required field"
			})
		}

		// step:03 password and confirm password value match
		if(password!==confirmpassword){
			res.status(404).json({
				success:false,
				message:"Password doesn't matched"
			})
		}

		// step:04 check user exits or not:
		const ExistingUser = await User.findOne({email});
		if(ExistingUser){
			res.status(405).json({
				success:false,
				message:"User Already Exists"
			})
		}

		// step:05 find most recent OTP
		const recentOTP = await OTP.find({email}).sort({createdAt:-1}).limit(1);
		// validate the otp:
		if(recentOTP.length==0){
			// OTP not false:
			return res.status(405).json({
				success:false,
				message:"OTP Not found"
			})
		}else if(otp!=recentOTP.otp){
			// invalid otp:
			return res.status(403).json({
				success:false,
				message:"invalid OTP"
			})
		}

		// step:06 Password hashing:
		const hashPassword = await bcrypt.hash(password,10);
		// Create the user
		let approved = "";
		approved === "Instructor" ? (approved = false) : (approved = true);


		const profileDetail = await Profile.create({
			gender:null,
			dateOfBirth:null,
			about:null,
			contactNumber:null
		})

		// step:07 create user entry in db
		const user = await User.create({
			firstName,
			lastName,
			email,
			password:hashPassword,
			phoneNumber,
			accountType:accountType,
			approved:approved,
			additionalDetail:profileDetail._id,
			image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
		})

		return res.status(200).json({
			success:true,
			message:"User is registerd Successfully",
		})

	} catch (error) {
			console.error(error);
			console.log(error)
			return res.status(403).json({
				success:false,
				message:"User Can't be registerd plese try again" 
			})
			
	}
}

// login:
exports.login = async(req,res)=>{
	try {
		const {email,password}=req.body;

		if(!email || !password){
			return res.status(403).json({
				success:false,
				message:"all field are required"
			})
		}

		// popluate se sara data aa jayenga user ka
		const user = await User.findOne({email}).populate('AditionalDetails');
		if(!user){
			return res.status(403).json({
				success:false,
				message:"user is not registerd please signup first"
			})
		}

		// password matched:
		if(await bcrypt.compare(password, user.password)){
			const payload = {
				email:user.email,
				id:user.id,
				accountType:user.accountType
			}

			const token = jwt.sign(payload,process.env.JWT_SECRET,{
				expiresIn:"24h",
			})
			user.token =token
			user.password=undefined;

			const options={
				expires:new Date(Date.now() +3*24*60*60*1000),
				httpOnly:true,
			}
			res.cookie('token',token,options).status(200).json({
				success:true,
				token,
				user,
				message:"User logged In successfully"
			})
		}
		else{
			return res.status(401).json({
				success:false,
				message:"Password Wrong"
			})
		}

	} catch (error) {
		console.error(error);
		console.log(error);
		
	}
}


// change password:
exports.changePassword= async(req,res)=>{
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
}


