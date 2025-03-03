const mongoose=require('mongoose');



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phonenum:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    gender:{ 
        type:Number,
        enum:[0,1],
        default:1
     },
     isverified:{
         type:Boolean,
         enum:[true,false],
         default:false
     }

},{timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;