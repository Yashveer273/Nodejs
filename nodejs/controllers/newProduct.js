const ProductList= require( "../database/ProductM2.js");
var newProductsController={
    addProductController:async(req,res)=>{
    try{
        const newProduct=new ProductList(req.body);
        await newProduct.save();
        res.status(200).send("new product has been created");
        }catch(error){
            console.log(error);
        }
    }
}
module.exports=newProductsController;