const express = require('express') ; 
const dotenv = require('dotenv') ; 
const urlRoute  = require('../URL-SHORTENER-/Routes/url');
const {connectMongoDB} = require('./Connection');

dotenv.config() ; 

const app= express() ; 
const PORT = process.env.PORT_NUMBER; 
app.use(express.json());

connectMongoDB(process.env.MONGOURL)
.then(res=>console.log("MongoDB connected",res))
.catch(err=>console.log("error in mongo connectioin",err)) 


//Routes
app.use('/api/url',urlRoute) ; 

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
});