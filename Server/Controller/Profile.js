const Profile= require('../Models/Profile');
const User = require('../Models/user');

exports.updateProfile = async (req,res ) => {
	try {
		// get data
		const {dateOfBirth,about,contactNumber,gender}= req.body;
		// get userId
		const id= req.user.id;
		// validate
		if(!contactNumber || !gender || !about || !id){
			return res.status(402).json({
				success:false,
				message:"Please fill all the field"
			})
		}
		// find Profile
		const userDetails = await User.findById({id});
		const profileID =userDetails.additionalDetail;
		const profileDetails = await Profile.findById(profileID);
		// update profile
		profileDetails.dateOfBirth=dateOfBirth;
		profileDetails.contactNumber=contactNumber;
		profileDetails.about=about;
		profileDetails.gender=gender;
		await profileDetails.save(); 	

		//return response
		return res.status(200).json({
			success:true,
			message:"Profile Update Successfully",
			profileDetails
		})

	} catch (error) {
		return res.status(402).json({
			success:false,
			message:"Error in updating the proflie",
		})
	}
}

// delete Account

exports.deleteAccount = async (req,res ) => {
	try {
		// get id
		const id = req.user.id;
		const userDetails= await User.find({id});
		// check validity
		if(!id){
			return res.status(404).json({
				success:false,
				message:"User not found",
			})
		}

		// delete whole profile
		await Profile.findByIdAndDelete({_id:userDetails.additionalDetail})
		// Unroll user from all enrolled course
		// delete user
		await User.findByIdAndDelete({_id:id})

		// return res:
		return res.status(200).json({
			success:true,
			message:"Account Deleted Successfully"
		})

	} catch (err) {
		console.error(err);
		return res.status(401).json({
			success:false,
			message:"Error in Deleting your profile"
		})
	}
}

// fetching all the data:
exports.getAllUserDetails= async (req,res ) => {
	try {
		// get id
		const id= req.user.body;
		// validate data:
		if(!id){
			return res.status(402).json({
				success:false,
				message:"Id is not valid"
			})
		}
		const userDetails = await User.findById(id).populate("additionalDetails").exec();
		return res.status(200).json({
			success:true,
			message:"User data feched successfully"
		})
	} catch (error) {
		return res.status(401).json({
			success:false,
			message:"Error in fetching user Details"
		})
	}
}