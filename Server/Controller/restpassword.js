const User = require("../Models/user");
const mailSender = require("../Utils/mailSender");
const bcrypt = require('bcrypt');

exports.resetPasswordToken = async (req, res) => {
  try {
    // get email:
    const { email } = req.body;
    // validate email:
    const user = await User.findOne({ email:email });

    if (!user) {
      return res.status(502).json({
        success: false,
        message: `This ${email} is not registerd with us enter  a valid email`,
      });
    }
    // generate token
	const token = crypto.randomBytes(20).toString("hex");

    // update user and adding token and expiration time:
    const updatedDetails = await User.findOneAndUpdate(
      { email:email },
      { token: token, resetPasswordExpires: Date.now()+ 3600000 },
	  {new:true}
    );
	console.log(updatedDetails);
    // create URL
    const URL = `http://localhost:3000/update-password/${token}`;

    //send mail containing the url:
    await mailSender(email, "Password Reset Link", `Password Reset URL:${URL} please click the url to reset your password`);

    // return response:
    return res.status(200).json({
      success: true,
      message: "Password Mail send Successfully",
    });
  } catch (error) {

		console.log(error)
		return res.status(402).json({
			success:false,
			message:"Something went Wrong while "
		})
  }
};


// resetPassword:

exports.resetPassword= async(req,res)=>{
	try {
		// data fetch:
		const {password, confirmPassword,token}= req.body;

		// validation:
		if(password!==confirmPassword){
			return res.status(403).json({
				success:false,
				message:"Password not Matched"
			})
		}

		//get user detail from db using token
		const userDetails = await User.findOne({token:token});
	

		// check token validity: if no entry token is invalid
		if(!userDetails){
			return res.json({
				success:false,
				message:"Token is invalid"
			})
		}

		//token time check:
		if(userDetails.resetPasswordExpires<Date.now()){
			return res.json({
				success:false,
				message:"token is expires,please regenerate your token"
			})
		}

		// hash pwd:
		const hashPassword = await bcrypt.hash(password,10);


		// password update:
		await User.findOneAndUpdate({token:token},
			{password:hashPassword},
			{new:true}
		)

		return res.status(200).json({
			success:true,
			message:"Password Updated successfully"
		})

		//return response:
	} catch (error) {
			console.log(error)
			return res.status(402).json({
				success:false,
				message:"Error while updating Password"
			})
	}
}
