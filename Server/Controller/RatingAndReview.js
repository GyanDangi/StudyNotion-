const { default: mongoose } = require('mongoose');
const RatingAndReview = require('../Models/RatingAndReview');
const Course = require('../Models/course');

// create Rating 
exports.createRating= async (req,res ) => {
	try {
		// get userID 
		const userId = req.body;
		// fetch data from req  body
		const {rating,review, courseId}=req.body;
		//  check student/user enrolled or not
		const courseDetails = await Course.findOne({
											_id:courseId,StudentEnrolled:{
												$elemMatch:{$eq:userId}
											}})
		if(!courseDetails){
			return res.status(402).json({
				success:false,
				message:"Unable to get course Details"
			})
		}									
		//	ckeck user already reviewed the course
		const arlearyReviewed= await RatingAndReview.findOne({user:userId,course:courseId})
		if(arlearyReviewed){
			return res.status(402).json({
				success:false,
				message:'course is already is reviewed by the user'
			})
		}
		// create rating and review
		const ratingReview = await RatingAndReview.create({
						rating:rating,
						review:review,
						course:courseId,
						user:userId,
		})
		// update course with this rating and review
		const updatedcourseDetails =await Course.findByIdAndUpdate({_id:courseId},{
				$push:{
					ratingAndReviews:ratingReview._id
				},
				
		},{new:true,},)
		console.log(updatedcourseDetails);
		// return response:
		return res.status(200).json({
			success:true,
			message:"Rating and Review successfully",
			ratingReview
		})
		
	} catch (error) {
			return res.status(500).json({
				success:false,
				message:"Not able to rate and review",
			})
	}
}

// get Average Rating
exports.getAvgRating = async (req, res ) => {
		try {
			// get course id
			const courseId = req.body.courseId;
			// calculate avg_rating
			const result = await RatingAndReview.aggregate([
											{
												$match:{
													course: new mongoose.Types.ObjectId({courseId}),
												}
											},
											{
												$group:{
													_id:null,
													avgRating:{$avg:"$rating"}
												}
											}
			])
			// return avg-rating
			if(result.length>0){
				return res.status(200).json({
					success:true,
					message:"avg rating fetched successfully",
					avgRating:result[0].avgRating,

				})
			}
			
		} catch (error) {
			
		}
}

// getAll Rating
exports.allRating = async (req, res ) => {
	try {
		const allReviews = await RatingAndReview.find({}).
									sort({rating:'desc'}).
									populate({
										path:'user',
										select:'firstName LastName email image'
									}).
									populate({
										path:'course',
										select:'courseName'
									}).exec();

		return res.status(200).json({
			success:true,
			message:"All rating and reviews fetched successfully",
			data:allReviews,
		})							

		
	}
	catch(err){
		console.log(err);
		return res.status(500).json({
			success:false,
			message:err.message,
		})
	}
}