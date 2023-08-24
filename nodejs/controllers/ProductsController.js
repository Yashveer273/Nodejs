const ProductList= require( "../database/ProductM2.js");
var ProductsController={
     getProductController:async(req,res)=>{
    try{
        const Products = await ProductList.find();
        res.status(200).send(Products);
        }catch(error){
        console.log(error);
        } 
    }
}
module.exports=ProductsController;

