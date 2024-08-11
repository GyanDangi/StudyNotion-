const SubSection = require('../Models/subSection');
const Section = require('../Models/Section');
const {uploadImageToCloudinary} = require('../Utils/UploadImage')
require('dotenv').config();

exports.subSection =async (req,res ) => {
	try {
		// fetch data from the body:
		const {sectionId,title, timeDuration,description}= req.body;
		// extract file and video/ uploading video file from local storage
		const video =req.files.videoFIle
		// validation
		if(!sectionId || !title || !timeDuration || !description){
			return res.status(402).json({
				success:false, 
				message:"All fields are requrired",
			})
		}
		// upload video to Cloudinary
		const uploadVidoes= await uploadImageToCloudinary(video,process.env.Codehelp)

		// create a subSection
		const subSectionDetails = await SubSection.create({
			title:title,
			timeDuration:timeDuration,
			videoUrl:uploadVidoes.secure_url,
			description:description
		})
		// update Section with this subsection SubjectId

		const updatedSection= await Section.findByIdAndUpdate({_id:sectionId},
			{$push:{
				subSection:subSectionDetails._id
			}},
			{new:true,}
		).populate("SubSection")
		// HW:
		// return res
		return res.status(200).json({
			success:true,
			message:"Sub-Section Created Successfully",
			updatedSection,
		})
	} catch (error) {
		return res.status(401).json({
			success:false,
			message:"Internal Sever error while adding subsection",
			error:message.error
		})
	}
}


// update Subsection
exports.updateSubSection =async (req, res ) => {
	try {
		// get section id;
		const {sectionId,title, timeDuration,description}= req.body;
		// validate section id:
		if(!sectionId || !title || !timeDuration || !description){
			return res.status(402).json({
				success:false,
				message:"All fields are required"
			})
		}
		// update subsection
		
		// return response
	} catch (error) {
		
	}
}

// delete subsection
