// const express= require('express');
// const router=express.Router();
// const User=require("../models/User");
// const bcrypt=require("bcrypt");

//Register


// //LOGIN
// router.post("/login", async(req, res)=>{
//     try{
//         const user=await User.findOne({ email: req.body.email});
//         !user && res.status(404).json("user not found");

//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         !validPassword && res.status(400).json("wrong password");

//         res.status(200).json(user)
//     }catch (err) {
//         res.status(500).json(err)

//     }


// })

// module.exports = router