

const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:["name is required"]
        
    },
    email:{
        type:String,
        required:["email is required"],
        unique:true
    },
    Role:{
      type:String,
      default:"User"
    },
    image:{
      type:String,
      default:"https://www.bing.com/images/search?view=detailV2&ccid=Ghae4OEd&id=1AFDF3123335E05A0A7206F41047B9721BA1AB17&thid=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&mediaurl=https%3a%2f%2fwww.clipartkey.com%2fmpngs%2fm%2f152-1520367_user-profile-default-image-png-clipart-png-download.png&exph=785&expw=900&q=default+image&simid=607992547286191661&FORM=IRPRST&ck=0D6094784C1373BB844156E92261345D&selectedIndex=0"
    },
    cart:{
      type:Array
    },
    password:{
        type:String,
        required:["password is required"]
    }
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
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
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
});
module.exports=mongoose.model('Users',userSchema);