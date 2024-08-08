const mongoose = require('mongoose');

const courseProgressSchema = new mongoose.Schema({

	courseId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Course",
	},
	CompletedVidoes:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"subSection",
	}


})

module.exports = mongoose.model("CourseProgress",courseProgressSchema);