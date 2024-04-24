const express = require('express') ; 
const router =  express.Router() ; 
const {handleGenerateUrl} = require('../Controllers/url') ; 


router.post('/',handleGenerateUrl);


module.exports = router ;