const mongoose=require('mongoose');
const MonumentSchema=new mongoose.Schema({
    monumentname:{
        type:String,
        required:[true,"monument is required"],
        
        

    },
    desc:
    {
        type:String,
        required:[true,"desc is required"],
        
    },
    location:{
        type:String,
        required:[true,"location is required"],
        
    },
    rating:{
        type:Number,
        required:[true,"rating is required"],
       
    },
    cost:{
        type:String,
        required:[true,"cost is required"],
    },
    slots:{
        type:String,
        required:[true,"slots are required"],

    },
    imagelink:{
        type:String,
        required:[true,"imagelink is required"],
        
        unique:true
    }
});
module.exports=mongoose.model("Monuments",MonumentSchema);