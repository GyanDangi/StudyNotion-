const User =require('../Models/user');
const Tags =require('../Models/tags');
const Course=require('../Models/course');
const {uploadImageToCloudinary}=require('../Utils/UploadImage');



exports.createCourse=async (req,res) => {
	try {
		const {courseName,couresDescription ,whatyouwillLearn, price ,tag }=req.body ;

		// get thumbnai:
		const {thumbnail}= req.files.thumbnailImage;

		// validation:
		if(!courseName || !couresDescription || !whatyouwillLearn || !thumbnail || !price || !tag){

			return res.status(402).json({
				success:false,
				message:"All field are required",
			})
		}

		// check for instructor:
		const userId = req.user.id;
		const instructorDetail = await User.findById({userId});
		console.log(userId);

		if(!instructorDetail){
			return res.status(403).json({
				success:false,
				message:"Instructor details not found"
			})
		}

		// check given tag is valid or not:
		const tagDetails = await Tags.findById(tag);
		if(!tagDetails){
			return res.status(403).json({
				success:false,
				message:"tagDetails not found"
			})
		}

		// upload image to cloudinary:
		const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME)

		// create and entry for new course:
		const newCourse= await Course.create({
			courseName,
			couresDescription,
			instructor:instructorDetail._id,
			price,
			whatyouwillLearn,
			tag:tagDetails._id,
			thumbnail:thumbnailImage.secure_url

		})

		// add new course to the user schema of Instructor:

		await User.findByIdAndUpdate({id:instructorDetail._id},{
			$push:{
				courses:newCourse._id,
			}
		});

		// update the tag ka Schema:


	} catch (error) {
		console.log(error)
		return res.json({
			success:false,
			message:"ERROR IN updating course"
		})
	}
}


exports.showAllCourse= async (req,res) => {

	try {
			const allCourses= await Course.find({},{
				courseName:true,
				price:true,
				thumbnail:true,
				instructor:true,
				ratingAndReviews:true,
				StudentEnrolled:true,
			}).populate("instructor").exec();

		return res.status(200).json({
			success:true,
			message:"data for all courses fetched successfully"
		})	
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			success:false,
			message:"error in fetching all courses detail"
		})
	}
}