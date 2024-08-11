const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({

	name:{
		type:String,
		required:true,
		trim:true,
	},
	description:{
		type:String,
	},
	course:{
		type:mongoose.Schema.Types.ObjectId,
		required:true,
		ref:"Course"
	}
})

module.exports = mongoose.model("Category",tagsSchema);