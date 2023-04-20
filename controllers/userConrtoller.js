const userModel = require('../models/userModel.js');


const createUser = async (req, res) => {
    try {
        //destructure data
        let { userType, firstname, email, city, phone, address, state, zip, dob } = req.body

        //here we can Apply all validation if present

        //Create a new User
        const user = await userModel.create({ userType, firstname, email, city, phone, address, state, zip, dob })

        return res.status(201).send({ status: true, message: "Create User Data Successfully", data: user })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Create User Data" })
    }
}

const getSingleUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        //here we can Apply all validation if present

        //Geting User Data by Id
        const user = await userModel.findById(userId)
        if (!user) {
            return res.status(404).send({ status: false, message: "User Not Found" })
        }
        return res.status(200).send({ status: true, message: "Geting Single User Data Successfully", data: user })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Geting Single User Data" })
    }
}


const getAllUsers = async (req, res) => {
    try {
        //Get All User Data
        const user = await userModel.find().limit(10)
        if (!user) {
            return res.status(404).send({ status: false, message: "User Data Not Found" })
        }
        return res.status(200).send({ status: true, message: "Geting All Users Data Successfully", data: user })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Geting All Users Data" })
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId

        //destructure data so we can easly apply validations......
        let { userType, firstname, email, city, phone, address, state, zip, dob } = req.body

        //here we can Apply all validation if present

        //Update User Data
        const user = await userModel.findByIdAndUpdate(userId, { ...req.body }, { new: true })
        if (!user) {
            return res.status(404).send({ status: false, message: "User Not Found" })
        }
        return res.status(200).send({ status: true, message: "Update User Data Successfully", data: user })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Update User Data" })
    }
}



const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId
        //Find User By Id And Delete
        await userModel.findByIdAndDelete(userId)
        return res.status(200).send({ status: true, message: "Delete Users Data Successfully" })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error While Delete Users Data" })
    }
}

module.exports = {
    createUser,
    updateUser,
    getSingleUser,
    getAllUsers,
    deleteUser
};