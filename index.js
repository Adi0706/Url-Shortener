const express = require('express') ; 
const dotenv = require('dotenv') ; 
const urlRoute  = require('../URL-SHORTENER-/Routes/url');
const staticRoutes = require('../URL-SHORTENER-/Routes/Static Routes/staticrouter') ; 
const {connectMongoDB} = require('./Connection');
const path = require('path') ;


dotenv.config() ;
const app= express() ; 
const PORT = process.env.PORT_NUMBER; 

//middlewares
app.use(express.json()); // json data parse
app.use(express.urlencoded({extended:false})) ; // form data parse

connectMongoDB(process.env.MONGOURL)
.then(res=>console.log("MongoDB connected",res))
.catch(err=>console.log("error in mongo connectioin",err)) 

//setting the template engine
app.set("view engine","ejs") ; 
app.set('views',path.resolve('./Views'));

//Routes
app.use('/api/url',urlRoute) ; 
app.use('/',staticRoutes) ; 


app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
});