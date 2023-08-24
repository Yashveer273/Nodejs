
const mongoose=require('mongoose');
//  mongoose.connect('mongodb://localhost:27017/cm_meta_store');
// au.connect().then(()=>console.log("mongodb connected")).catch(error=>console.log("mongodb not connected",error))
const con=mongoose.connect('mongodb+srv://user1:Yash8218326519@cluster0.qzqirbw.mongodb.net/cm_meta_store');
if (con){
    console.log("MongoDb connected")
}else{
    console.log("Mongodb Connection Error")
}