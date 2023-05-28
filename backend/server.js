const { log } = require('console');
const app = require('./app');
const connectDatabase = require("./config/database")

const dotenv = require('dotenv');


//config
dotenv.config({path:"backend/config/.env"})

//db connect
connectDatabase()


app.listen(process.env.PORT,()=>{
    console.log(`Server is woring on http://localhost:${process.env.PORT}`)
})

