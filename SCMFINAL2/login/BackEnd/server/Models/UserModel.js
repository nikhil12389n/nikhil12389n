const  mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
  role:{
    type:String,
    required:[true,"Role is required"],
    unique:true
  },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Passsword is required"]
    }
});
userSchema.pre("save", async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
});
userSchema.statics.login = async function (role, password) {
    const user = await this.findOne({ role });
    console.log(user);
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
  
      if (auth) {
        return user;
      } else {
        throw new Error("Incorrect Password");
      }
    }
    throw new Error("Incorrect Email");
  };
module.exports=mongoose.model("User",userSchema);