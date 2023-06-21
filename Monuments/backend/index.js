const express=require('express');
const cors=require('cors');

const mongoose=require('mongoose');

const cookieParser=require('cookie-parser');
const app=express();
const authRoutes=require("./Routes/Authroutes.js");


app.listen(4000,()=>{
    
    console.log("Connected to server!");
});

mongoose.connect("mongodb+srv://nikhilbhukya198:nikhil123@cluster0.ac7mdr7.mongodb.net/Entryway?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to mongo db!");
})
.catch((err=>{
    console.log("Its a connection error for mongdb:",err);
}));


app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET","POST","UPDATE","DELETE"],
    credentials:true
}));




app.use(cookieParser());
app.use(express.json());

app.use("/",authRoutes);