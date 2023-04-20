const XLSX = require('xlsx')
const path = require('path');
const userModel = require('../models/userModel.js');
const lobModel = require('../models/lobModel.js');
const agentModel = require('../models/agentModel.js');
const userAccountModel = require('../models/userAccountModel.js');
const policyModel = require('../models/policyModel.js');
const carrierModel = require('../models/carrierModel.js');

const filteredData = async (req, res) => {
    try {
        const filePath = path.resolve(__dirname, `../${req.file.path}`);
        let workbook = XLSX.readFile(filePath);
        let sheet_name_list = workbook.SheetNames;
        let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        xlData.forEach(async (allData) => {
            //destructure data
            let { agent,
                userType,
                firstname,
                email,
                city,
                phone,
                address,
                state,
                zip,
                dob,
                company_name,
                policy_mode,
                producer,
                policy_number,
                premium_amount,
                policy_type,
                policy_start_date,
                policy_end_date,
                account_name,
                account_type,
                csr,
                category_name } = allData

            //Filtered users data and create a collection of users
            await userModel.create({
                userType,
                firstname,
                email,
                city,
                phone,
                address,
                state,
                zip,
                dob
            })

            //Filtered Policy data and create a collection of Policy
            await policyModel.create({
                policy_mode,
                producer,
                policy_number,
                premium_amount,
                policy_type,
                policy_start_date,
                policy_end_date
            })


            //Filtered  user account data and create a collection of user account
            await userAccountModel.create({
                account_name,
                account_type,
                csr
            })
            //Filtered  Agent data and create a collection of Agent
            await agentModel.create({ agent })

            //Filtered  LOB data and create a collection of LOB
            await lobModel.create({ category_name })

            //Filtered Carrier data and create a collection of Carrier
            await carrierModel.create({ company_name })

        });
        return res.status(200).send({ status: true, message: "Data Filtered Successfully" })
    }
    catch (e) {
        console.log(e.message);
        res.status(500).send({ status: false, error: "Geting Error When Filtered Data" })
    }
}



module.exports = filteredData;