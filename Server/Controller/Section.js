const Section = require('../Models/Section');
const Course = require('../Models/course');
const { findByIdAndDelete } = require('../Models/user');


exports.createSection = async (req, res) => {
	try {
		// data fetch 
		const {sectionName,courseId}= req.body;
		// data validation
		if(!sectionName || !courseId){
			return res.status(401).json({
				success:false,
				message:"All fields are required"
			})
		}
		//create section
		const newSection = await Section.create({sectionName});

		// update course
		const updatedCourse = await Course.findByIdAndUpdate({courseId},
			{
				$push:{
					courseContent:newSection._id
				}
			},
			{new:true}
		).populate("newSection")
		// populate both section and subsection in populated course
		console.log(updatedCourse);
		
		// return response
		return res.status(200).json({
			success:true,
			message:"Section Created Successfully",
			updatedCourse
		})



	} catch (error) {
			console.log(error)
			return res.status(402).json({
				success:false,
				message:"Error in Section in Creation",
				error:error.message
			})
	}
}

exports.updateSection = async (req,res) => {
	try {
		// data input
		const {sectionName, sectionId}= req.body;

		// data vlidation
		if(!sectionName || !sectionId){
			return res.status(401).json({
				success:false,
				message:"Update Section Properties are Missing"
			})
		}
		// update data
		const updateSection = await Section.findByIdAndUpdate({sectionId},{
			sectionName
		},
	{new:true,})

		// return response
		return res.status(200).json({
			success:false,
			message:"Section Updated Successfully"
		})

	} catch (error) {
		
	}
}

// delete Section:
exports.deleteSection = async (req,res ) => {
	try {
		// get Id
		const {sectionId} = req.params;

		// use findbyidanddelete
		await Section.findByIdAndDelete({sectionId})
		// return response
		return res.status(200).json({
			success:true,
			message:"Section Deleted Successfully",
		})
	} catch (error) {
		return res.status(500).json({
			success:false,
			message:"Unable to Delete Section"
		})
	}
}