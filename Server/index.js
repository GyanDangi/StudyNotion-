const express = require('express');
const app = express();

const userRoute= require('./Routes/User');
const profileRoute= require('./Routes/Profile');
const paymentRoute= require('./Routes/Payments');
const courseRoute= require('./Routes/Course');

require('dotenv').config();
const database= require('./Config/database');
const cookieParser= require('cookie-parser');	
const cors = require('cors');
const {cloudinaryConnect}= require('./Config/cloudinary');

const fileUpload = require('express-fileupload');

const PORT = process.env.PORT ||4000;

// database se connect:
database.connect();

// middleware:rs
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:'/temp'
	})
)


// cloudinary se connect:
cloudinaryConnect();

// routes moute:
app.use('/api/v1/auth',userRoute);
app.use('/api/v1/profile',profileRoute);
app.use('/api/v1/course',courseRoute);
app.use('/api/v1/payment',paymentRoute);




app.get('/',(req,res)=>{
	return res.json({
		success:true,
		message:"Your server is up and running",
	})
})


app.listen(PORT,()=>{
	console.log(`app is running at: ${PORT}`);
})
