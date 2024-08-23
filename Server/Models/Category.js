const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({

	name:{
		type:String,
		required:true,
	},
	description:{
		type:String,
	},
	courses:[
		{type:mongoose.Schema.Types.ObjectId,
		required:true,
		ref:"Course"}
]
})
mongoose.models ={};
module.exports = mongoose.model("Category",categoriesSchema);