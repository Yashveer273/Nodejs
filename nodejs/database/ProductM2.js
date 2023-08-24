
const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        price:{type:Number,required:true},
        category:{type:String,required:true},
        img:{type:String,required:true},
        common:{type:String,required:true}
        

        
},{timestamp:true}
);
const Products=mongoose.model("Products",ProductSchema);
module.exports=Products;