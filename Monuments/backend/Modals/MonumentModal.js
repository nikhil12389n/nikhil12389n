const mongoose=require('mongoose');
const MonumentSchema=new mongoose.Schema({
    monumentname:{
        type:String,
        required:[true,"monument is required"],
        default:Date.now()
        

    },
    desc:
    {
        type:String,
        required:[true,"desc is required"],
        default:Date.now()
    },
    location:{
        type:String,
        required:[true,"location is required"],
        default:Date.now()

    },
    rating:{
        type:Number,
        required:[true,"rating is required"],
        default:Date.now()
    },
    imagelink:{
        type:String,
        required:[true,"imagelink is required"],
        default:Date.now(),
        unique:true
    }
});
module.exports=mongoose.model("Monuments",MonumentSchema);
