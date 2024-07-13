const express = require('express');
const app = express();

const userModel = require('./user_model') 

app.get('/',(req,res) => {
  res.send("hello maadeha ")
})

// Create 

app.get('/create',async (req,res) => {
  let createdUser = await userModel.create({
    firstname:"khudej",  // => this whole code is asynchronous h to yeh zaroori nh pehly chal jay nechy wala code ho skta h pehly chal jay  monogoose ka code aalways asynchronous hoga 
    lastname:"khalid",                              // Thing to know is that jo id hmy mil rhi h na woh us kay start kay 6 words are timestamp  
    email:"khudej@gmail.com"
  })
  res.send(createdUser);
})

// Update 

app.get('/update', async (req,res) => {
  let updateduser = await userModel.findOneAndUpdate({lastname:"shaikh"} , {lastname:"shaikh"} , {new:true})
  res.send(updateduser)
});

// Read 
app.get('/read',async (req,res) => {
   let users = await userModel.find();    // find matlb read find sab ko read karta h but if we pass any value it will just pass that one item , find hmesha array dayta h if we have no data or obj but if we use findOne it will show null , findOne apko jo pehla he elemeny match milta h woh day dyta h 
   res.send(users);
})

// Delete 
app.get("/delete", async (req,res)=>{
   let user = await userModel.findOneAndDelete({firstname:"khudej"}); 
   res.send(`Dear ${user.firstname} your account has been deleted !`)
})

app.listen(3000);






