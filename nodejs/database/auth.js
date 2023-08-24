const mongoose =require('mongoose')
const { collection } = require('./User')
const authSchema=new mongoose.Schema({
    name:{type:String,required:true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true}
} )
module.exports=mongoose.model('auth',authSchema) 
