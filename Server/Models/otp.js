const mongoose = require('mongoose');
// const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const mailSender = require('../Utils/mailSender');

const otpSchema = new mongoose.Schema({
	email:{
		type:String,
		required:true,

	},
	otp:{
		type:String,
		required:true,
	},
	createdAt:{
		type:Date,
		default:Date.now(),
		expires:5*60
	}
});


// a function to send email:
async function sendVerificationMail(email,otp){
	try {

		const mailResponse  = await mailSender(email,"Verifcation email from StudyNotion", otp);
		console.log("email send successfully",mailResponse);

	} catch (error) {
		console.log("ERROR WHILE SENDING EMAIL:",error);
	}
}
// db me store krne se phle mail send kr rhe hai:
otpSchema.pre("save",async function(next){
	await sendVerificationMail(this.email,this.otp);
	next();
})



module.exports = mongoose.model("OTP",otpSchema);