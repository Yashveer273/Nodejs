const mongoose=require('mongoose');
const curdSchema=new mongoose.Schema(
    {
        Name:String,
        
        price:Number,
        category:String,
        id:String,
        company:String
    }
);
module.exports=mongoose.model("curdtable",curdSchema);