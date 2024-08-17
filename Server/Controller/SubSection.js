const SubSection = require('../Models/subSection');
const Section = require('../Models/Section');
const {uploadImageToCloudinary} = require('../Utils/UploadImage')
require('dotenv').config();

exports.createsubSection =async (req,res ) => {
	try {
		// fetch data from the body:
		const {sectionId,title, description}= req.body;
		// extract file and video/ uploading video file from local storage
		const video =req.files.videoFIle
		// validation
		if(!sectionId || !title  || !description || !video){
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
		const {sectionId,title,description}= req.body;
		const subSection = await SubSection.findById(sectionId)
  
      if (!subSection) {
        return res.status(404).json({
          success: false,
          message: "SubSection not found",
        })
      }
		// validate section id:
		if(!sectionId || !title || !description){
			return res.status(402).json({
				success:false,
				message:"All fields are required"
			})
		}

		if (title !== undefined) {
			subSection.title = title
		  }
	  
		  if (description !== undefined) {
			subSection.description = description
		  }
		// update subsection
		if (req.files && req.files.video !== undefined) {
			const video = req.files.video
			const uploadDetails = await uploadImageToCloudinary(
			  video,
			  process.env.FOLDER_NAME
			)
			subSection.videoUrl = uploadDetails.secure_url
			subSection.timeDuration = `${uploadDetails.duration}`
		  }
	  
		  await subSection.save()
	  
		  return res.json({
			success: true,
			message: "Section updated successfully",
		  })
		
		// return response
	} catch (error) {
		console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while updating the section",
      })
	}
}

// delete subsection

exports.deleteSubSection = async (req, res) => {
    try {
      const { subSectionId, sectionId } = req.body
      await Section.findByIdAndUpdate(
        { _id: sectionId },
        {
          $pull: {
            subSection: subSectionId,
          },
        }
      )
      const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })
  
      if (!subSection) {
        return res
          .status(404)
          .json({ success: false, message: "SubSection not found" })
      }
  
      return res.json({
        success: true,
        message: "SubSection deleted successfully",
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: "An error occurred while deleting the SubSection",
      })
    }
  }
