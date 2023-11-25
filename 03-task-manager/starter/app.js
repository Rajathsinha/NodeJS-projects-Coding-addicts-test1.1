const express = require('express')

const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');

require('./db/connection')
require('dotenv').config()

//middleware

app.use(express.json())

//ROUTES

app.get('/hello',(req,res)=>{
    res.send('Task manager app')
})

app.use('/api/v1/tasks',tasks)
const port= 3002;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening the port on ${port}..`))

    }catch(error){
        console.log(error);
    }
 }



start();