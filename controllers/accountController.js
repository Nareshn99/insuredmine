const userAccountModel = require('../models/userAccountModel.js');


const createAccount = async (req, res) => {
    try {
        //destructure data
        let { account_name, account_type, csr } = req.body

        //here we can Apply all validation if present

        //Create a new Account
        const data = await userAccountModel.create({ account_name, account_type, csr })

        return res.status(201).send({ status: true, message: "Create New Account Successfully", data })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Create New Account" })
    }
}



const getAccount = async (req, res) => {
    try {
        const pId = req.params.pId;

        //here we can Apply all validation if present

        //Geting Account Data by Id
        const data = await userAccountModel.findById(pId)
        if (!data) {
            return res.status(404).send({ status: false, message: "Data Not Found" })
        }
        return res.status(200).send({ status: true, message: "Geting Account Data Successfully", data })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Geting Account Data" })
    }
}




const updateAccount = async (req, res) => {
    try {
        const pId = req.params.pId;

        //here we can Apply all validation if present

        //Update Policy Data
        const data = await userAccountModel.findByIdAndUpdate(pId, { ...req.body }, { new: true })
        if (!data) {
            return res.status(404).send({ status: false, message: "Data Not Found" })
        }
        return res.status(200).send({ status: true, message: "Update Account Data Successfully", data })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Update Account Data" })
    }
}



const deleteAccount = async (req, res) => {
    try {
        const pId = req.params.pId
        //Find Account By Id And Delete
        await userAccountModel.findByIdAndDelete(pId)
        return res.status(200).send({ status: true, message: "Delete Account Data Successfully" })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Delete Account Data" })
    }
}



module.exports = {
    createAccount,
    updateAccount,
    getAccount,
    deleteAccount
};