const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    userType:String,
    firstname:String,
    email:String,
    city:String,
    phone:String,
    address:String,
    state:String,
    zip:String,
    dob:Date
 })
 
module.exports=mongoose.model("User", userSchema);
