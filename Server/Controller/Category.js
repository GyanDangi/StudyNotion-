const Category=require('../Models/Category');


exports.createTags=async(req,res)=>{
	try {

		// fetch name and description
		const {name, description }=req.body
		// validation
		if(!name || !description){
			return res.status(402).json({
				success:false,
				message:"All field are required"
			})
		}

		// create entry in db:
		const tagsDetails = await Category.create({
			name:name,
			description:description,
		});
		console.log(tagsDetails)

		return res.status(200).json({
			success:true,
			message:"tags created Successfully",
		})


	} catch (error) {
		console.log(error)
		res.status(402).json({
			success:false,
			message:"ERROR IN Tags creation"
		})
	}
}

// get all the tags details:


exports.ShowAllTags = async (req,res) => {
	try {
		const allTags = await Category.find({},{name:true,description:true})
		return res.status(200).json({
			success:true,
			message:"All tags fetched Successfully", 
		})
		
	} catch (error) {
			console.log(error)
			res.status(402).json({
				success:false,
				message:"ERROR IN FINDING Tags"
			})
	}
}