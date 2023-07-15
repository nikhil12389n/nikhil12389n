const express=require('express');
const cors=require('cors');

const mongoose=require('mongoose');
const authRoutes=require("./Routes/AuthRoutes.js");
const app=express();

const cookieParser=require('cookie-parser');
app.listen(4000,()=>{
    
    console.log('connected to port 4000');
});

const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.REACT_APP_Mongo,
{useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("DB connection successfully done!");
}).catch((err=>{
    console.log(err.message);
}));
app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST"],
    credentials:true
}));

app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);

