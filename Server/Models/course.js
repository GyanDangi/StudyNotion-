const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

	courseName:{
		type:String,
		trim:true,
		required:true,
	},
	couresDescription:{
		type:String,
	},
	instructor:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User",
		required:true,
	},
	whatyouwillLearn:{
		type:String,
	},
	courseContent:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Section",
		required:true,
	}],
	ratingAndReviews:[{
		type:mongoose.Schema.Types.ObjectId,
		ref:"RatingandReview",
	}],
	price:{
		type:Number,
	},
	tag:{
		type:[String],
		required:true,
	},
	thumbnail:{
		type:String,
	},
	category:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Category",
	},
	StudentEnrolled:[{
		type:mongoose.Schema.Types.ObjectId,
		required:true,
		ref:"User"
	}],
	instructions:{
		type:[String]
	},
	status:{
		type:String,
		enum:["Draft","Published"]
	}

})


module.exports = mongoose.model("Course",courseSchema);