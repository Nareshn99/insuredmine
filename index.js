const express =require('express');
const dotenv =require('dotenv')
const connectDB =require('./config/db.js');
const router =require('./routes/router.js');


const app = express();

//config env
dotenv.config()

//connect Db
connectDB();

//middlewares
app.use(express.json());
app.use('/',router)


let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Is Running On Port>>>>>>>  ${PORT}`)
});