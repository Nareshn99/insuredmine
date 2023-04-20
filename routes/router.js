const express = require('express');
const upload = require('../middlewares/upload');
const filteredData = require('../controllers/uploadController');
const { createUser, updateUser, getSingleUser, getAllUsers, deleteUser } = require('../controllers/userConrtoller');
const { createPolicy, getPolicy, updatePolicy, deletePolicy } = require('../controllers/policyController');
const { createAccount, getAccount, updateAccount, deleteAccount } = require('../controllers/accountController');

const router = express.Router();


//upload csv file and filtter Data
router.post("/filtter-data", upload.single('file'), filteredData);


//User CRUD operation
router.post("/create-user", createUser);
router.get("/get-single-user-data/:userId", getSingleUser);
router.get("/get-all-users-data/", getAllUsers);
router.put("/update-user/:userId", updateUser);
router.delete("/delete-user/:userId", deleteUser);



//Policy CRUD operation
router.post("/create-policy", createPolicy);
router.get("/get-policy-data/:pId", getPolicy);
router.put("/update-policy/:pId", updatePolicy);
router.delete("/delete-policy/:pId", deletePolicy);



//Account CRUD operation
router.post("/create-account", createAccount);
router.get("/get-account-data/:pId", getAccount);
router.put("/update-account/:pId", updateAccount);
router.delete("/delete-account/:pId", deleteAccount);



module.exports = router;