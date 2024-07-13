const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);
const userSchema = mongoose.Schema({    
  // schema matlb har user kay pass kia kia details hongi 
  firstname:String,
  lastname:String,
  email:String
})

//CRUD hm model ki base p  karty hain without model kay we can't do anything like CRUD

module.exports = mongoose.model("user", userSchema);  // model bna h ab jo bh mainy double quotes mai likha h us kay pluralized word ka model bany ga like user h to users kay name say bnay ga model

// ab export hm ny model ko kia h on app.js page jahn p basically hm CRUD karwana chahty hain 