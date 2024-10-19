// # install "npm i concurrently" in front end package.json
// npm i concurrently
// #Also Add this to file package.json -> script-> to run backend and frontend -concurrently
// # "server": "cd server && npm run dev",
// #     "dev": "concurrently -n \"client,server\" -c \"bgBlue,bgYellow\" \"npm start\" \"npm run server\""
  


const express = require('express');
const app = express();

const userRoute= require('./routes/user');
const contactUsRoute = require("./routes/contact");
const profileRoute= require('./routes/profile');
const paymentRoute= require('./routes/payment');
const courseRoute= require('./routes/course');

require('dotenv').config();
const database= require('./config/database');
const cookieParser= require('cookie-parser');	
const cors = require('cors');
const {cloudinaryConnect}= require('./config/cloudinary');

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
app.use("/api/v1/reach", contactUsRoute);




app.get('/',(req,res)=>{
	return res.json({
		success:true,
		message:"Your server is up and running",
	})
})


app.listen(PORT,()=>{
	console.log(`app is running at: ${PORT}`);
})
