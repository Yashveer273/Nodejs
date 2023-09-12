

require('dotenv').config()
const express = require("express");
const cors = require("cors");
const moment = require("moment");
const bodyParser = require("body-parser");
const morgen = require("morgan");
const dotenv = require("dotenv");
require("./config1");//----------connection file 
const multer = require("multer");
// app.use(express.urlencoded({ extended: true }));
// const con = require("./config2");
// const User = require("./database/User");

// ............................................img upload required this................
const fs = require('fs');
const path = require('path');

const ImageModel=require("./database/Cmageupload")
// .....................................................................................

const Curd= require("./database/curdmodel");//..........schema file
const CurdChart =require("./database/CurdChart");//..........schema file
const Auth = require("./database/auth");//...................schema file
const mongoose = require("mongoose");
// const ProductRouter = require("./Routes/ProductRouters");
// const { default: Bills } = require("./database/billsModel");
// const billsRouter = require("./Routes/billsRouter");

// const contect = require("./database/contect");
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgen("dev"));
app.use(cors());
const PORT= process.env.PORT||5000
// app.use("/uploads", express.static("./uploads"));
const jwt = require("jsonwebtoken");


                    // Deashboasd project api .
                   

// ------------------------------------------------------------
//api to save ptroduct detail of table1
app.post("/item",verifyToken,async(req,res)=>{
  let Product =new Curd(req.body);
  let result= await Product.save();
  res.send(result)
})
//api to save ptroduct detail of table1
app.post("/itemChart",verifyToken,async(req,res)=>{
  let Product =new CurdChart(req.body);
  let result= await Product.save();
  res.send(result)
})

// api to get send data of table 1
app.get("/getitem", verifyToken, async (req, res) => {

  try {
    let products = await Curd.find();
    res.send({
     products
    });
  } catch (error) {
 
    res.send({
      status: 403,
      message: "token expired",
    });
  }
});

//send data of table2
app.get("/getitemchart",verifyToken,async(req,res)=>{
  let products =await CurdChart.find();
  if(
    products.length>0   
  )
  {
    res.send(products)
  }else{
    res.send("empty")
  }
})
//delete api of table 1
app.delete("/deleteitem/:id",verifyToken,async(req,res)=>{
  let result =await Curd.deleteOne({_id:req.params.id});
  res.send(result)
})
//delete api of table 2
app.delete("/deletechartitem/:id",verifyToken,async(req,res)=>{
  let result =await CurdChart.deleteOne({_id:req.params.id});
  res.send(result)
})
// update item of table 1 is getting 
app.get("/updateitem/:id",verifyToken,async(req,res)=>{
  let result =await Curd.findOne({_id:req.params.id})
  if(result){
     res.send(result)
  }else{
    res.send({result:"Result not found."})
  }
})
//update itme of table 2 is getting 
app.get("/updateitemchartData/:id",verifyToken,async(req,res)=>{
  let result =await CurdChart.findOne({_id:req.params.id})
  if(result){
     res.send(result)
  }else{
    res.send({result:"Result not found."})
  }
})
// updated item of table 1 is sending 
app.put("/updateitem/:id",verifyToken,async(req,res)=>{
  let result = await Curd.updateOne({
    _id:req.params.id
  },{$set:req.body})
  res.send(result)
})
//chart
app.put("/updatechatrData/:id",verifyToken,async(req,res)=>{
  let result = await CurdChart.updateOne({
    _id:req.params.id
  },{$set:req.body})
  res.send(result)
})

// jwt function 
function verifyToken(req, res,next){
  let token =req.headers['authorization'];
  if(token){
    
    jwt.verify(token,process.env.secretKey,(err,res)=>{
      if(err){
      return res.status(403).json({
        message:"token expired please relogin "
      })
      }else{
        next();

      }
    })

  }else{
    res.status(403).send({
    result:"please add token with header"
    })
  }
}

//login jwt
app.post("/authdataLogin", async (req, res) => {
  const auth = await Auth.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (auth) {
     jwt.sign({ auth }, process.env.secretKey,{ expiresIn: "1hr" },(err,token)=>{
      if(err){
     res.json({
      status:401
     })
      
      }else{
        res.send({status: "welcome", auth: token,result:auth })
      }
    }, 
      
    );
  
  } else {
    return res.json({
      result: "error",
      auth: false,
    });
  }
});

//signin jwt
app.post("/authdata", async (req, res) => {
  console.log(req.body);

  try {
    let user = new Auth(req.body);
    let result = await user.save();
    result = result.toObject(); 
    delete result.password
    jwt.sign({ result },process.env.secretKey, { expiresIn: "2hr" }, (err, token) => {
      if (err) {
        res.send({
          result: "something went wrong, please try again",
        });
      } 
        res.json({
          result,
          auth: token,
        });
      
    });
  
  } catch (err) {
    console.log(err);
    res.json({ result: "error", error: "This email is already used, use different one" });
  }
});



// --------------------------------
// image upload apli
// var imgconfig = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, file, callback) => {
//     callback(null, `image-${Date.now()}.${file.originalname}`);
//   },
// });



// ........................................imp upload...........
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = './uploads'; // Specify your upload folder
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }, { name: 'image4' }]), async (req, res) => {
  try {
    const imageUrls = [];

    // Extract file information and save to MongoDB
    for (let i = 1; i <= 4; i++) {
      if (req.files[`image${i}`]) {
        const image = req.files[`image${i}`][0];
        const imageUrl = `/uploads/${image.filename}`;
        const IMGNAME = image.fieldname;
    
        // Use square brackets to define the key dynamically
        const imageObject = {};
        imageObject[IMGNAME] = imageUrl;
    
        imageUrls.push(imageObject);
      }
    }  

     
        // Save image information to MongoDB
      
        await ImageModel.create({images:imageUrls});// expected o/p->{imgames: [
          //   {
          //     image2: '/uploads/1694519996297_aleksandra-tanasiienko-0y6eMd8vevA-unsplash.png'
          //   },
          //   {
          //     image3: '/uploads/1694519996348_aleksandra-tanasiienko-0y6eMd8vevA-unsplash.png'
          //   },
          //   {
          //     image4: '/uploads/1694519996375_aleksandra-tanasiienko-0y6eMd8vevA-unsplash.png'
          //   }
          // ]}
    
    
    console.log(imageUrls)// o/p-MongoDb connected
    // [
    //   {
    //     image2: '/uploads/1694519996297_aleksandra-tanasiienko-0y6eMd8vevA-unsplash.png'
    //   },
    //   {
    //     image3: '/uploads/1694519996348_aleksandra-tanasiienko-0y6eMd8vevA-unsplash.png'
    //   },
    //   {
    //     image4: '/uploads/1694519996375_aleksandra-tanasiienko-0y6eMd8vevA-unsplash.png'
    //   }
    // ]

    res.status(200).json({ message: 'Images uploaded successfully', imageUrls });
    // res.status(200).json({ message: 'Images uploaded successfully', imageUrls1 });

  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Error uploading images' });
  }
});



app.listen(PORT);



// //filter

// const isImage = (req, file, callback) => {
//   if (file.mimetype.startwith("image")) {
//     callback(null, true);
//   } else {
//     callback(null, Error("only image is allow"));
//   }
// };
// var upload = multer({
//   storage: imgconfig,
//   filfilter: isImage,
// });
// //vendor data
// app.post("/vendorData", upload.single("photo"), (req, res) => {
//   console.log(req.body);
//   const { userName } = req.body;
//   const { Mobil_No } = req.body;
//   const { price } = req.body;
//   const { address } = req.body;
//   const { pin_code } = req.body;
//   const { catagory } = req.body;
//   const { productName } = req.body;
//   const { email } = req.body;
//   const Quantity = 1;

//   const Price = parseInt(price);
//   const Pin_code = parseInt(pin_code);

//   const quantity = parseInt(Quantity);
//   const { filename } = req.file;-------------------------------------path
//   console.log(
//     userName,
//     "ffff",
//     filename,
//     Mobil_No,
//     price,
//     address,
//     pin_code,
//     catagory,
//     productName,
//     email,
//     Quantity
//   );

//   if (!userName || !filename) {
//     res.status(200).json({ status: 200, message: "fill all the deatail " });
//   }
//   try {
//     let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

//     con.query(
//       "INSERT INTO Venders_Products_Table5 SET ?",
//       {
//         user_Name: userName,
//         date: date,
//         img_Name: filename,
//         name: userName,
//         Product_Name: productName,
//         Address: address,
//         Mobil_No: Mobil_No,

//         Email: email,
//         Price: Price,
//         Quantity: quantity,
//         Category: catagory,
//         pin_code: Pin_code,
//       },
//       (err, result) => {
//         if (err) {
//           console.log("erro he");
//         } else {
//           console.log("data added");
//           res.status(201).json({ status: 201, data: req.body });
//           console.log("good");
//         }
//       }
//     );
//   } catch (err) {
//     res.status(404).json({ status: 404, err });
//     console.log("eerro ago");
//   }
// });




//Signup API
// app.post("/register", async (req, resp) => {
//   let user = new User(req.body);
//   if (req.body.name && req.body.password) {
//     var result = await user.save();
//     result = result.toObject();
//     delete result.password;
//     resp.send(result);
//     // console.log(resp.send(result))
//   } else {
//     resp.send({ result: "wrong" });
//   }

//   // let result =await user.save();
//   // result=result.toObject();
//   // delete result.password
//   // resp.send(result);
// });

//signup jwt

//contect api
// app.post("/contect", async (req, resp) => {
//   let Contect = new contect(req.body);
//   var result = await Contect.save();
//   resp.send(result);
// });



// // Login API
// app.post("/Login", async (req, resp) => {
//   console.log(req.body);
//   if (req.body.name && req.body.password) {
//     let user = await User.findOne(req.body).select("-password");
//     if (user) {
//       resp.send(user);
//     } else {
//       resp.send({ result: "user not found" });
//     }
//   } else {
//     resp.send({ result: "no not found" });
//   }
// });
// //product api
// app.use("/api/Products/", ProductRouter);
// // bills api
// app.use("/api/bills/addbills", billsRouter);
// // -------------------------------------------------mysql databse connection

// app.get("/abc", (req, resp) => {
//   // resp.send("route done")
//   con.query("select * from ProductImg4", (err, result) => {
//     if (err) {
//       resp.send(" there is an error");
//     } else {
//       resp.send(result);
//     }
//   });
// });

// app.get("/form10", (req, resp) => {
//   // resp.send("route done")
//   con.query("select * from Venders_Products_Table5", (err, result) => {
//     if (err) {
//       resp.send(" there is an error");
//     } else {
//       resp.send(result);
//     }
//   });
// });

// app.get("/abc1", (req, resp) => {
//   // resp.send("route done")
//   con.query("select * from ProductImg5", (err, result) => {
//     if (err) {
//       resp.send(" there is an error");
//     } else {
//       resp.send(result);
//     }
//   });
// });

// app.get("/abc5", (req, resp) => {
//   // resp.send("route done")
//   con.query("select * from ProductImg6", (err, result) => {
//     if (err) {
//       resp.send("there is an error");
//     } else {
//       resp.send(result);
//     }
//   });
// });

// =========================================================
// app.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id, "...............");
//   try {
//     con.query(`DELETE FROM massage1 WHERE id ='${id}'`, (err, result) => {
//       if (err) {
//         console.log("erroe");
//       } else {
//         console.log("data delete");
//         res.status(201).json({ status: 201, data: result });
//       }
//     });
//   } catch (err) {
//     res.status(422).json({ status: 422, err });
//   }
// });

// app.post("/massage", (req, res) => {
//   console.log(req.body);
//   const { massage } = req.body;

//   console.log(massage);

//   try {
//     let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

//     con.query(
//       "INSERT INTO massage1 SET ?",
//       {
//         Note: massage,
//         date: date,
//       },
//       (err, result) => {
//         if (err) {
//           console.log("erro he");
//         } else {
//           console.log("data added");
//           res.status(201).json({ status: 201, data: req.body });
//           console.log("good");
//         }
//       }
//     );
//   } catch (err) {
//     res.status(404).json({ status: 404, err });
//     console.log("eerro ago");
//   }
// });

// app.get("/massage1", (req, resp) => {
//   con.query("select * from massage1", (err, result) => {
//     if (err) {
//       resp.send(" there is an error");
//     } else {
//       resp.send(result);
//     }
//   });
// });

// app.get('/search', (req, res) => {
//   const query = req.query.q;
//   const sql = `SELECT * FROM ProductImg4 WHERE name LIKE '%${query}%'`;

//   connection.query(sql, (error, results, fields) => {
//     if (error) throw error;
//     res.send(results);
//   });
// });

// // ------------------------------------------------------------
// app.post("/item",verifyToken,async(req,res)=>{
//   let Product =new Curd(req.body);
//   let result= await Product.save();
//   res.send(result)
// })
// //chatdata
// app.post("/itemChart",verifyToken,async(req,res)=>{
//   let Product =new CurdChart(req.body);
//   let result= await Product.save();
//   res.send(result)
// })


// app.get("/getitem",verifyToken,async(req,res)=>{
//   let products =await Curd.find();
//   if(products.length>0){
//     res.send(products)
//   }else{
//     res.send({result: "error"})
//   }

// })
// //chart
// app.get("/getitemchart",verifyToken,async(req,res)=>{
//   let products =await CurdChart.find();
//   if(products.length>0){
//     res.send(products)
//   }else{
//     res.send({result: "error"})
//   }

// })
// app.delete("/deleteitem/:id",verifyToken,async(req,res)=>{
//   let result =await Curd.deleteOne({_id:req.params.id});
//   res.send(result)
// })
// app.delete("/deletechartitem/:id",verifyToken,async(req,res)=>{
//   let result =await CurdChart.deleteOne({_id:req.params.id});
//   res.send(result)
// })
// app.get("/updateitem/:id",verifyToken,async(req,res)=>{
//   let result =await Curd.findOne({_id:req.params.id})
//   if(result){
//      res.send(result)
//   }else{
//     res.send({result:"Result not found."})
//   }
// })
// //chart
// app.get("/updateitemchartData/:id",verifyToken,async(req,res)=>{
//   let result =await CurdChart.findOne({_id:req.params.id})
//   if(result){
//      res.send(result)
//   }else{
//     res.send({result:"Result not found."})
//   }
// })
// app.put("/updateitem/:id",verifyToken,async(req,res)=>{
//   let result = await Curd.updateOne({
//     _id:req.params.id
//   },{$set:req.body})
//   res.send(result)
// })
// //chart
// app.put("/updatechatrData/:id",verifyToken,async(req,res)=>{
//   let result = await CurdChart.updateOne({
//     _id:req.params.id
//   },{$set:req.body})
//   res.send(result)
// })


// function verifyToken(req, res,next){
//   let token =req.headers['authorization'];
//   if(token){
    
//     jwt.verify(token,'secret123',(err,valid)=>{
//       if(err){
//         res.status(401).send({
//           result:"please provide right token"
//         })
//       }else{
//         next();

//       }
//     })

//   }else{
//     res.status(403).send({
//     result:"please add token with header"
//     })
//   }
// }


// //login jwt
// app.post("/authdataLogin", async (req, res) => {
//   const auth = await Auth.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   if (auth) {
//     const token = jwt.sign({ name: auth.name, email: auth.email }, "secret123");
//     return res.json({ status: "ok", auth: token,data:auth });
//   } else {
//     return res.json({
//       status: "error",
//       auth: false,
//     });
//   }
// });

// //signin jwt
// app.post("/authdata", async (req, res) => {
//   console.log(req.body);

//   try {
//     let user = new Auth(req.body);
//     let result = await user.save();
//     result = result.toObject(); 
//     delete result.password
//     jwt.sign({ result },"secret123", { expiresIn: "2hr" }, (err, token) => {
//       if (err) {
//         res.send({
//           result: "something went wrong, please try after solmetime",
//         });
//       } 
//         res.json({
//           result,
//           auth: token,
//         });
      
//     });
  
//   } catch (err) {
//     console.log(err);
//     res.json({ status: "error", error: "This email is already used, use different one" });
//   }
// });

// app.listen(5000);





// mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });


