const mongoose = require('mongoose');
require('dotenv').config();


exports.connect=()=>{
	mongoose.connect(process.env.DB_URL)
	.then(()=>{
		console.log("DB CONNECTED SUCCESSFULLY")
	}).catch((err)=>{
		console.log(err)
		console.error(err);
		process.exit(1);
		
	})
}