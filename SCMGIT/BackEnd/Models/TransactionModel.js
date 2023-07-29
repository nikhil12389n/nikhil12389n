

const mongoose=require('mongoose');



const TransactionSchema=new mongoose.Schema({
    user:{
        type:String,
        required:[true,"User is required!"],
        unique:true
    },
    TransactionHash:{
        type:[String],
        required:[true,"TransactionHash is required!"],
        unique:true
    },
    from:{
        type:[String],
        required:[true,"From address is required!"]
    },
    to:{
        type:[String],
        required:[true,"To address is required!"]

    },
    time:{
        type:[String],
        required:[true,"Time is required!"],
        unique:true
    },
    gasUsed:{
        type:[Number],
        required:[true,"Number is required!"]
    }
});

module.exports=mongoose.model("Transactions",TransactionSchema);