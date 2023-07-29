const UserModel = require("../Models/UserModel");
const jwt = require('jsonwebtoken');
const TransactionModel = require('../Models/TransactionModel');

const TrackOrderModel = require('../Models//TrackOrderModel');
const nodemailer = require('nodemailer');
const maxAge = 3 * 24 * 60 * 60;

const handleErrors = (err) => {
    let errors = { email: "", password: "" };
    if (err.message == "Incorrect Email") {
        errors.email = "The role is not registered!";
    }
    if (err.message == "Incorrect Password") {
        errors.password = "The password was incorrect!";
    }
    if (err.code == 11000) {
        errors.email = "Already registered!";
        return errors;
    }
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}




module.exports.register = async (req, res, next) => {

    try {
        const { role, email, password } = req.body;
        const emailExists = await UserModel.exists({ email });
        const roleExists = await UserModel.exists({ role });

        
            const user = await UserModel.create({ role, email, password });
            const token = jwt.sign({ role, email }, "Nikhil", {
                expiresIn: maxAge,
            });

            res.cookie("jwt", token, {
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge * 1000,
            });
            res.json({created:true});
        
}
catch (err) {
    const errors=handleErrors(err);
    res.json({ errors, created: false });
}
}

module.exports.login = async (req, res, next) => {
    try {
        const { role, password } = req.body;
        const user = await UserModel.login(role, password);


        const token = jwt.sign({ role: role }, "Nikhil", {
            expiresIn: maxAge,
        });

        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000
        });
        res.status(200).json({ user: user._id, created: true });
    }
    catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};
module.exports.logout = async (req, res, next) => {
    res.cookie("jwt", "", { expires: new Date(0) });
    res.json({ message: "Removed jwt value successfully" });
};

module.exports.postTransaction = async (req, res, next) => {

    try {
        const data = req.body.details;
        console.log(data);
        const user = data.user;
        let details = await TransactionModel.findOne({ user });
        if (details != null) {
            details.TransactionHash.push(data.TransactionHash);
            details.from.push(data.from);
            details.to.push(data.to);
            details.time.push(data.time);
            details.gasUsed.push(data.gasUsed);
            await details.save();
        } else {
            details = await TransactionModel.create({
                user,
                TransactionHash: [data.TransactionHash],
                gasUsed: [data.gasUsed],
                from: [data.from],
                to: [data.to],
                time: [data.time],
            });

        }
        res.status(200).json({ details });
    } catch (err) {
        res.status(400).josn({ err });
    }
};
module.exports.getTransactions = async (req, res, next) => {
    try {
        const rolename = req.query.ROLENAME;
        const data = await TransactionModel.findOne({ user: rolename });

        res.status(200).json({ data, found: true });
    }
    catch (err) {
        console.log(err);
        res.status(200).json({ found: false });
    }
}


module.exports.postTrackOrder = async (req, res, next) => {
    console.log("First");
    try {

        const { adstname, requestno, status, desc } = req.body;

        const data = adstname;

        let post = await TrackOrderModel.findOne({ adstname: data });
        console.log(post);
        if (post) {
            const existingRequest = post.requests.find(request => request.requestno === requestno);
            console.log(existingRequest, "existed");
            if (existingRequest) {
                existingRequest.desc.push(desc);
                existingRequest.status.push(status);
            } else {
                post.requests.push({
                    requestno,
                    desc: [desc],
                    status: [status]
                });
            }
            await post.save();
        } else {
            post = await TrackOrderModel.create({
                adstname,
                requests: [{
                    requestno,
                    desc: [desc],
                    status: [status]
                }]
            });
        }

        res.status(200).json({ post });
    } catch (error) {
        console.error(error);
        res.status(400).json({ err: error.message });
    }
};

module.exports.getTrackorders = async (req, res, next) => {
    
    try {
        const user = req.query.user;
        console.log(user);
        const trackorder = await TrackOrderModel.findOne({ adstname: user });
       
        console.log(trackorder,"hi");
        res.status(200).json({ trackorder });
    }
    catch (err) {
        console.log(err);
        res.status(404).json({ found: false });

    }
}

module.exports.register1 = async (req, res, next) => {
    try {
        const { role, email, password } = req.body;
        const emailExists = await UserModel.exists({ email });
        const roleExists = await UserModel.exists({ role });
        console.log("this is register1");

        const user = await UserModel.create({ role, email, password });
        const transporter = nodemailer.createTransport({
            service: "gmail",


            auth: {
                user: "nikhilbhukya198@gmail.com",
                pass: "bgzsnmsccjcdyjjk",
            },

        });


        const mailOptions = {
            from: "nikhilbhukya198@gmail.com",
            to: email,
            subject: `Congratulations! You were added by ASC as ${role}`,
            text: `Your role is: ${role} and your password is ${password}. Do not share it with anyone!`,
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log("Email Sent Successfully!");
            }
        });
        res.status(200).json({ role: role, created: true });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
}





module.exports.deleteRole=async(req,res,next)=>{
    try{
        const role=req.body.role;

        const deleterole=await UserModel.deleteOne({role});
        console.log(deleterole);


        res.json({deleted:true});

    }
    catch(err){
        console.log(err);
        res.json({deleted:false});

    }
}