

const URL = require('../Models/url')

async function handleGenerateUrl(req,res){
const body = req.body ; 
if(!body.url){
    return res.status(400).json({error:"url is required"}) ; 
}

const { nanoid } = await import('nanoid');
const shortid = nanoid(8);
await URL.create({
   shortID:shortid,
   redirectURL:body.url,
   visitHistory:[],

})

return res.json({id:shortid}) ; 
}

module.exports= {
    handleGenerateUrl,
}