const mongoose =require('mongoose')

const agentSchema = new mongoose.Schema({
    agent:String
 })
module.exports=mongoose.model("Agent", agentSchema);