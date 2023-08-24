const mongoose=require('mongoose');
const curdSchema=new mongoose.Schema(
    {
        Name:String,
        Purches:Number,
        category:String,
        id:String,
    
    }
);
module.exports=mongoose.model("curdChartPurchasTable",curdSchema);