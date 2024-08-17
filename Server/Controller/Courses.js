const User =require('../Models/user');
const Category =require('../Models/Category');
const Course=require('../Models/course');
const {uploadImageToCloudinary}=require('../Utils/UploadImage');


// function to create a new course:
exports.createCourse=async (req,res) => {
	try {

		// Get user ID from request object
		const userId = req.user.id;

		const {
			courseName,
			couresDescription ,
			whatyouwillLearn, 
			price ,
			tag,
			category,
			status,
			instructions,
		 }=req.body ;

		// get thumbnai:
		const {thumbnail}= req.files.thumbnailImage;

		// validation:
		if(!courseName || !couresDescription || !whatyouwillLearn || !thumbnail || !price || !tag || !category){

			return res.status(402).json({
				success:false,
				message:"All field are required",
			})
		}
		if(!status || status===undefined){
			status="Draft";
		}

		// check for instructor:
		const instructorDetail = await User.findById({userId},{
			accountType:"Instructor",
		});

		if(!instructorDetail){
			return res.status(403).json({
				success:false,
				message:"Instructor details not found"
			})
		}

		// check given category is valid or not:
		const categoryDetails = await Category.findById(category);
		if(!categoryDetails){
			return res.status(403).json({
				success:false,
				message:"categoryDetails not found"
			})
		}

		// upload thumbnail image to cloudinary:
		const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME)
		console.log(thumbnailImage);

		// create and entry for new course:
		const newCourse= await Course.create({
			courseName,
			couresDescription,
			instructor:instructorDetail._id,
			whatyouwillLearn,
			price,
			tag:tag,
			category:categoryDetails._id,
			thumbnail:thumbnailImage.secure_url,
			status:status,
			instructions:instructions

		})

		// add new course to the user schema of Instructor:

		await User.findByIdAndUpdate({id:instructorDetail._id},{
			$push:{
				courses:newCourse._id,
			}
		});

		// update the category ka Schema:
		await Category.findByIdAndUpdate(
			{ _id: category },
			{
				$push: {
					course: newCourse._id,
				},
			},
			{ new: true }
		);


	} catch (error) {
		console.log(error)
		return res.json({
			success:false,
			message:"ERROR IN updating course"
		})
	}
}


exports.getAllCourse= async (req,res) => {

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



exports.getCourseDetails = async (req, res) => {
    try {
            //get id
            const {courseId} = req.body;
            //find course details
            const courseDetails = await Course.find(
                                        {_id:courseId})
                                        .populate(
                                            {
                                                path:"instructor",
                                                populate:{
                                                    path:"additionalDetails",
                                                },
                                            }
                                        )
                                        .populate("category")
                                        .populate("ratingAndreviews")
                                        .populate({
                                            path:"courseContent",
                                            populate:{
                                                path:"subSection",
                                            },
                                        })
                                        .exec();

                //validation
                if(!courseDetails) {
                    return res.status(400).json({
                        success:false,
                        message:`Could not find the course with ${courseId}`,
                    });
                }
                //return response
                return res.status(200).json({
                    success:true,
                    message:"Course Details fetched successfully",
                    data:courseDetails,
                })

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}