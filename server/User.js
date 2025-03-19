const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name:String,
    phno:Number,
    category:String,
    qty:Number
})
const Usermodel=new mongoose.model("Users",userschema)
module.exports=Usermodel