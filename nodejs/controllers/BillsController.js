const bills= require( "../database/billsModel.js");
var newBillsController={
    AddBillsController:async(req,res)=>{
    try{
        const newBills=new bills(req.body);
        await newBills.save();
        res.send("new bills has been created");
        }catch(error){
            console.log(error);
        }
    }
}
module.exports=newBillsController;