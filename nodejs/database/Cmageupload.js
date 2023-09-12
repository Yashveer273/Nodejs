const mongoose=require('mongoose');
const imageSchema = new mongoose.Schema({
  images: [
    {
      IMGNAME: String,
      imageUrl: String,
    },
  ], 
  });
 

module.exports =mongoose.model("Image",imageSchema);