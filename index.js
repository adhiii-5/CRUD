const express = require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const userRouter= require("./routes/users");
// const authRouter= require("./routes/auth");
const path= require('path');
const cors=require('cors');

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected");
})

//middleware
app.use(express.json());
app.use(cors());

//Serve the main Html fille for the root url
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views','index.html'));
});


app.use("/api/users", userRouter);
// app.use("/api/auth", authRouter);


app.listen(3000,()=>{
    console.log("backend server is running");
})