const mongoose=require('mongoose');
const imageSchema = new mongoose.Schema({
   img1: String, 
   img2: String,// URL or path to the uploaded image
  });
 

module.exports =mongoose.model("Image",imageSchema);