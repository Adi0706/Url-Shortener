const express = require('express') ; 
const router =  express.Router() ; 
const {handleGenerateUrl,handleRedirect,handleAanalytics} = require('../Controllers/url') ; 


router.post('/',handleGenerateUrl);
router.get('/:shortId',handleRedirect) ; 
router.get('/analytics/:shortId',handleAanalytics);


module.exports = router ;