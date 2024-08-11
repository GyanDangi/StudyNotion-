const { default: mongoose } = require('mongoose');
const {instance}= require('../Config/razorpay');
const Course= require('../Models/course');
const User = require('../Models/user');
const mailSender= require('../Utils/mailSender');
// courese enrollmenet email yaha pr dalna hai:



// capture payment and initiate the razorpay order

exports.capturePayments =async (req,res ) => {
	try {
		// get uesrid and courseId
		const {courseId}= req.body;
		const userId = req.user.id;
		// validation
		if(!courseId){
			res.status(400).json({
				success:false, 
				message:"Please provide valid course id"
			})
		}
		// validate the course details:
		let course;
		  try {
				course= await Course.findById({courseId});
				if(!course){
					res.status(402).json({
						success:false,
						message:"Course not found"
					})
				}

				// user already paid for the same cousrse
				const uid= new mongoose.Types.ObjectId({userId});
				if(course.StudentEnrolled.includes(uid)){
					return res.status(502).json({
						success:false,
						message:"student is already enrolled"
					})
				}

		  } catch (err) {
			console.error(err);
			return res.status(402).json({
				success:false,
				message:err.message
			})
		  }
		// create the order:
		const amount= course.price;
		const currency="INR";
		const options={
			amount: amount*100,
			currency,
			receipt:Math.random(Date.now()).toString(),
			notes:{
				courseId:courseId,
				userId

			}
		}

		try {
			// initiate the payment using the razorpay:
			const paymentResponse =await instance.orders.create(options);
			console.log(paymentResponse);
			return res.status(200).json({
				success:true,
				message:"",
				courseName:course.courseName,
				courseDescription:course.couresDescription,
				thumbnail:course.thumbnail,
				orderId:paymentResponse.id,
				currency:paymentResponse.currency,
				amount:paymentResponse.amount,
			})
		} catch (error) {
				console.log(error);
				res.json({
					success:false,
					message:"Could not initiate the order"
				})
		}


			
		
	} catch (error) {
		return res.status(402).json({
			success:false,
			message:"Unable to crete order right now"
		})
	}
}

// verify signature of the razorpay:
exports.verifySignature =async (req, res ) => {
	try {
		const webhookSecret= "12345678";
		const signature = req.headers['x-razorpay-signature'];

		// converting the webhook secret to match with signature:
		const shasum=crypto.createHmac("sha256",webhookSecret);
		shasum.update(JSON.stringify(req.body));
		const digest = shasum.digest("hex");

		if(signature===digest){
			console.log("payment is authorised");
			// this we getting form the razorpay req.body:
			const {courseId,userId}=req.body.payload.payment.entity.notes;
			try {
				// fulfill the action:
				// find the student and enroll the student in the course:

				const enrolledCourse= await Course.findOneAndUpdate(
													{_id:courseId},
													{$push:{StudentEnrolled:userId}},
													{new:true,}
				)
				if(!enrolledCourse){
					return res.json({
						success:false,
						message:"Course Enrollement failed to the student, course not found",
					})
				}

				console.log(enrolledCourse);
				// find and the student and add the course to their list:
				const enrolledStudent = await User.findOneAndUpdate(
														{_id:userId},
														{$push:{courses:courseId}},
														{new:true,}

				)
				console.log(enrolledStudent);

				// email response to the student
				const emailResponse = await mailSender(enrolledStudent.email,
														'Congratulations',
														'congratulations for new course Purchase'
				)
				return res.status(200).json({
					success:true,
					message:"signature varified and course added"
				})
			} catch (error) {
				console.log(error);
				return res.status(402).json({
					success:false,
					message:error.message,
				})
			}
		}
		else{
			return res.status(402).json({
				success:false,
				message:"Error in verifying signature",
			})
		}

	} catch (error) {
		
	}
}



