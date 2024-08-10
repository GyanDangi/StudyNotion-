const jwt = require('jsonwebtoken');
require('dotenv').config();

const User =require('../Models/user');



// auth

exports.auth =async (req,res,next)=>{
	try {

		const token = req.body.token;
		// check if token is missing
		if(!token){
			return res.status(401).json({
				success:false,
				message:"Token is missing"
			})
		}

		// verify the token
		try {
			const decode = jwt.verify(token, process.env.JWT_SECRET)
			console.log(decode);
			req.user=decode;
			
		} catch (error) {
				return res.status(401).json({
					success:false,
					message:"Token is not valid"
				})
		}
		next();
	} catch (error) {
		res.status(401).json({
			success:false,
			message:"something went wrong while validating token"
		})
	}
}

// isStudent

exports.isStudent = async(req,res,next)=>{
	try {
		

		if(req.user.accountType !=="Student"){
			return res.status(401).json({
				success:false,
				message:"THis protected Route for Student only",
			})
		}
		next();

	} catch (error) {
		return res.status(401).json({
			success:false,
			message:"ERROR IN ISSTUDENT FETCHING"
		})
	}
}
// isInstructor:

exports.isStudent = async(req,res,next)=>{
	try {
		

		if(req.user.accountType !=="Instructor"){
			return res.status(401).json({
				success:false,
				message:"THis protected Route for Instructor only",
			})
		}
		next();

	} catch (error) {
		return res.status(401).json({
			success:false,
			message:"ERROR IN ISINSTRUCTOR FETCHING"
		})
	}
}

// isAdmin


exports.isStudent = async(req,res,next)=>{
	try {
		

		if(req.user.accountType !=="Admin"){
			return res.status(401).json({
				success:false,
				message:"THis protected Route for Admin only",
			})
		}
		next();

	} catch (error) {
		return res.status(401).json({
			success:false,
			message:"ERROR IN isAdmin FETCHING"
		})
	}
}
