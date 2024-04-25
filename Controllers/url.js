

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
return res.render("Home",{
    id:shortid,
});
}
async function handleRedirect(req,res){
    const shortID = req.params.shortId ;
    const entry = await URL.findOneAndUpdate({
        shortID,
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL) ; 
}
async function handleAanalytics(req,res){
    const shortID = req.params.shortId ; 
    const result = await URL.findOne({shortID});
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory

    })
}

module.exports= {
    handleGenerateUrl,
    handleRedirect,
    handleAanalytics
}