
const MonumentModel=require("../Modals/MonumentModal.js");

module.exports.addmonuments=async(req,res,next)=>{
    console.log(res.body);
    try{
        const monument = await MonumentModel.create({
            monumentname: req.body.monumentname,
            desc: req.body.desc,
            location: req.body.location,
            rating: req.body.rating,
            imagelink: req.body.imagelink,
          });
          res.json({ monument, created: true });
    }
    catch(err){
        res.json({err,created:false});
        console.log(err);
    }
}