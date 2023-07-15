const User=require('../Models/UserModel.js');


const jwt=require("jsonwebtoken");

module.exports.checkUser=(req,res)=> {
    const token=req.cookies.jwt;
   
    // console.log(token);
    if(token){
        try{
            const decode = jwt.verify(token,"Nikhil");
            console.log(decode,"hi");
            res.status(200).json({data:decode});

        }catch(err){
            console.log(err);
            res.status(200).json({status :"false"})
        }
    }
    else{
       console.log("not");
        res.json({status:false});
        next();
    }
}