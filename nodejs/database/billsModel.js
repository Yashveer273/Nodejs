const mongoose=require('mongoose');
const billsSchema=new mongoose.Schema({
customerName:{type:String,required:true},
customerNo:{type:Number,required:true},
customerAddress:{type:String,require:true},
PayMentType:{type:String,required:true},
totalAmount:{type:Number,required:true},
cartItems: {type: Array,required:true},


},{
    timestamps:true
});
const bills=mongoose.model("bills",billsSchema);
module.exports=bills
