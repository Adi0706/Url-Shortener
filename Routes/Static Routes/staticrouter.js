const express = require("express") ;
const router = express.Router() ; 
const {handleHomePage} = require('../../Controllers/StaticControllers/staticControllers');

router.get('/',handleHomePage) ; 








module.exports=router ;