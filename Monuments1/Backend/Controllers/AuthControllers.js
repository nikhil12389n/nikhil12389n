const MonumentModel=require("../Models/MonumentModel.js");



const UserModel=require("../Models/UserModel.js");

const jwt=require('jsonwebtoken');
const { findByIdAndRemove } = require("../Models/UserModel.js");

const maxAge=3*24*60*60;


const createToken=(id)=>{
    return jwt.sign({id},"Nikhil1",{
        expiresIn:maxAge
    })
};


module.exports.addmonuments=async(req,res,next)=>{
    console.log(res.body);
    try{
        const monument = await MonumentModel.create({
            monumentname: req.body.monumentname,
            desc: req.body.desc,
            location: req.body.location,
            rating: req.body.rating,
            slots:req.body.slots,
            cost:req.body.cost,
            imagelink: req.body.imagelink,
          });
          res.json({ monument, created: true });
    }
    catch(err){
        res.json({err,created:false});
        console.log(err);
    }
}
module.exports.allmonuments=async(req,res)=>{
    try{
        MonumentModel.find({})
        .then((items) => {
            res.status(200).json(items);
        });
    }
    catch(err){
        console.log(err);
    }
}


const handleErrors=(err)=>{

    let errors={email:"",password:""};
    if(err.message=="Incorrect Email"){
        errors.email="The email is not registered!";
    }
    if(err.message=="Incorrect Password"){
        errors.password="The password was incorrect!";
    }
    if(err.code==11000){
        errors.email="Already registered!";
        return errors;
    }
    if(err.message.includes("User validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        })
    }
    return errors;

}
module.exports.register=async(req,res)=>{
  try{
    const {email,password,name}=req.body;
    const user=await UserModel.create({
        name:name,
        email:email,
        password:password
    });
    const token=createToken(user._id);

    res.cookie("jwt",token,{
        withCredentials:true,
        httpOnly:false,
        maxAge:maxAge*1000
    });
    res.status(201).json({user:user._id,created:true});
  }
  catch(err){
    const error=handleErrors(err);
    res.json({error,created:false});
  }
}
module.exports.login=async(req,res,next)=>{
    try{
        const {email,password,name}=req.body;
        const user=await UserModel.login(email,password);
        console.log(user);
        const token=createToken(user._id);
        res.cookie("jwt",token,{
            withCredentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        });
        res.status(201).json({user:user._id,created:true});
    }
    catch(err){
        const error=handleErrors(err);
        res.json({error,created:false});
    }
}

module.exports.logout=async(req,res,next)=>{
    res.cookie("jwt", "", { expires: new Date(0) });
    res.json({ message: "Removed jwt value successfully" });
}



module.exports.addtocart=async(req,res,next)=>{

    const {Email,...cardData}=req.body;

    try{
        // console.log(Email);
        const document1=await UserModel.findOne({email:Email});
        console.log(document1);
        document1.cart.push(cardData);
        await document1.save();
        res.status(200).json({document1,created:true});

        
    }
    catch(err){
        console.log(err);
        res.status(400).json({created:false});
    }


}




module.exports.deletemonument=async(req,res)=>{
    try{
        // console.log(req.body._id); 
            await MonumentModel.findByIdAndRemove(req.body._id);
        res.status(200).json({deleted:true});
        
    }
    catch(err){
        res.status(500).json({err,deleted:false});
    }
}


module.exports.role=async (req,res)=>{
    
    

   try{
    const data=req.query.email;
    
    
    // console.log(req.query.email);
    const data1=await UserModel.findOne({email:data});
    // console.log(data1);
    res.status(200).json({data1,find:true});
   }
   catch(err){
    res.status(200).json({err,find:false})
   }
}



module.exports.carts=async(req,res)=>{
    try{
        // console.log(req.query.email);
        const data=req.query.email;
        // console.log(data);
        const data1=await UserModel.findOne({email:data});
        // console.log(data1.cart);
        res.status(200).json(data1);
        
    }
    catch(err){
        res.status(200).json({err});
    }
}




module.exports.deletecart=async(req,res)=>{
    try{
        // console.log(req.body);
        const email1=req.body.email;
        const indx=req.body.index;
        
        const data=await UserModel.findOne({email:email1});
        // console.log(data.cart);
        data.cart.splice(indx,1);
        await data.save();
        res.status(200).json({removed:true});

    }
    catch(err){
       res.status(200).json({removed:false});
        
    }
}


module.exports.readusers=async(req,res,next)=>{
    try{
        const data=await UserModel.find({});
        console.log(data);
        res.status(200).json({data,read:true});
    }
    catch(err){
        console.log(err);
        res.status(200).json({err,read:false});
    }
}