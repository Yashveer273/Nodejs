const test2=require("../controllers/BillsController")

const billsRouter=require("express").Router();

//api of bills 

billsRouter.post("/addbills",test2.AddBillsController);
module.exports=billsRouter;