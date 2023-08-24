const mongoose=require('mongoose');
const contectSchema=new mongoose.Schema(
    {
        name:String,
        mobNO:Number,
        coment:String,
    }
);
module.exports=mongoose.model("contect",contectSchema);