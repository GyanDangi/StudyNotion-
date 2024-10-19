const mongoose = require('mongoose');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const mailSender = require('../utils/mailSender');
const otpTemplate = require('../mail/templates/emailVerificationTemplate');

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
		expires:5*60,
	}
});


// a function to send email:
async function sendVerificationMail(email,otp){
	try {

		const mailResponse  = await mailSender(
			email,
			"Verifcation email from StudyNotion",
			otpTemplate(otp),	
		 );
		console.log("email send successfully",mailResponse);

	} catch (error) {
		console.log("ERROR WHILE SENDING EMAIL:",error);
	}
}
// db me store krne se phle mail send kr rhe hai:
otpSchema.pre("save",async function(next){
	
	if (this.isNew) {
		await sendVerificationMail(this.email, this.otp);
	}
	next();
})



const otp = mongoose.model("OTP",otpSchema);
module.exports =otp;