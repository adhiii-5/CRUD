const express= require('express');
const router=express.Router();
const User = require('../models/User');

router.post("/users",async (req, res)=>{
    //Create new user
   const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   });
   //save user and return respond
try{
    const savedUser= await newUser.save();
    res.status(201).json(savedUser);
}catch(error){
    res.status(404).json({message:error.message});
}
});



//Update user
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;

        // Find the user by ID and update
        const updatedUser = await User.findByIdAndUpdate(id, {
            username,
            email,
            password,
        }, { new: true }); // Returns the updated document

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

//DElete
router.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find and delete the user by ID
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  //get a user
  router.get('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  });


module.exports = router