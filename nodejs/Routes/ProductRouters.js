
const test2=require("../controllers/newProduct.js")
const test=require("../controllers/ProductsController.js");
const ProductRouter=require("express").Router();
//api from get the ptoduct list
ProductRouter.get("/getProducts",test.getProductController);
//api to add product list
ProductRouter.post("/addProducts",test2.addProductController);
module.exports=ProductRouter;