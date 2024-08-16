const Category=require('../Models/Category');


exports.createCategory=async(req,res)=>{
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


exports.ShowAllCategories = async (req,res) => {
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

//Category page details:

exports.categoryPageDetails =async (req, res ) => {
	try {

		// get categoryId
		const {categoryId} = req.body;
		// get courses for specified category id
		const selectedCategory = await Category.findById({categoryId})
										              .populate("Course")
													  .exec();
		// validation
		if(!selectedCategory){
			return res.status(404).json({
				success:false,
				message:"Data not found",
			})
		}
		// get course for different category
		const differentCategories = await Category.find({_id:{$ne:categoryId}})
															.populate("course").exec();
		// get topselling course 
		// 
		// return response 
		return res.status(200).json({
			success:true,
			message:"Category fetched successfully",
			
		})

	} catch (error) {
		
	}
}
