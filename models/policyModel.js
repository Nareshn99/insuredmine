const mongoose =require('mongoose')

const policySchema = new mongoose.Schema({
    policy_mode:String,
    producer:String,
    policy_number:String,
    premium_amount:String,
    policy_type:String,
    policy_start_date:Date,
    policy_end_date:Date
 })
module.exports=mongoose.model("Policy", policySchema);