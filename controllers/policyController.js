const policyModel = require('../models/policyModel.js');


const createPolicy = async (req, res) => {
    try {
        //destructure data
        let { policy_mode, producer, policy_number, premium_amount, policy_type, policy_start_date, policy_end_date } = req.body

        //here we can Apply all validation if present

        //Create a new Policy
        const data = await policyModel.create({ policy_mode, producer, policy_number, premium_amount, policy_type, policy_start_date, policy_end_date })

        return res.status(201).send({ status: true, message: "Create New Policy Successfully", data })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Create New Policy" })
    }
}



const getPolicy = async (req, res) => {
    try {
        const pId = req.params.pId;

        //here we can Apply all validation if present

        //Geting policy Data by Id
        const data = await policyModel.findById(pId)
        if (!data) {
            return res.status(404).send({ status: false, message: "Data Not Found" })
        }
        return res.status(200).send({ status: true, message: "Geting Policy Data Successfully", data })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Geting policy Data" })
    }
}




const updatePolicy = async (req, res) => {
    try {
        const pId = req.params.pId;

        //destructure data so we can easly apply validations......
        let { policy_mode, producer, policy_number, premium_amount, policy_type, policy_start_date, policy_end_date } = req.body

        //here we can Apply all validation if present

        //Update Policy Data
        const data = await policyModel.findByIdAndUpdate(pId, { ...req.body }, { new: true })
        if (!data) {
            return res.status(404).send({ status: false, message: "Data Not Found" })
        }
        return res.status(200).send({ status: true, message: "Update Policy Data Successfully", data })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Update Policy Data" })
    }
}



const deletePolicy = async (req, res) => {
    try {
        const pId = req.params.pId
        //Find Policy By Id And Delete
        await policyModel.findByIdAndDelete(pId)
        return res.status(200).send({ status: true, message: "Delete Policy Data Successfully" })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Delete Policy Data" })
    }
}



module.exports = {
    createPolicy,
    updatePolicy,
    getPolicy,
    deletePolicy
};