const mongoose=require('mongoose');

const carSChema=new mongoose. Schema({
 name:String,
 images:String,
 state:String,
 district:String,
 Km:String,
 model:String,
 price:String
});

const Car=mongoose.model("cars",carSChema)

module.exports=Car;
  
  