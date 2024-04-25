const URL =require('../../Models/url') ;


async function handleHomePage(req,res){
//    const allURLs = await URL.find({})
    return res.render("Home")
     
}

module.exports={
    handleHomePage
}