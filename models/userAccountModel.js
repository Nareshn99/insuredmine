const mongoose =require('mongoose')

const accountSchema = new mongoose.Schema({
    account_name:String,
    account_type:String,
    csr:String,
 })
 
module.exports=mongoose.model("Account", accountSchema);