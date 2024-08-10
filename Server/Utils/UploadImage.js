const cloudinary= require('cloudinary').v2;

exports.uploadImageToCloudinary= async(req,res,file,folder,height,quality)=>{

	try {
		const options={folder}
		if(height || quality){
			options.height=height;
			options.quality=quality;
		}

		options.resource_type="auto";
		return await cloudinary.uploader.upload(file.tempFilePath,options);
	} catch (error) {
		console.log(error)
		return res.json({
			success:false,
			message:"ERROR IN UPLOADING IMAGE",

		})
	}
}