const mongoose=require('mongoose');



const fileSchema=new mongoose.Schema({
    filename:{
        type:String
    },
    filetype:{  
        type:String,

    },
    url:{
        type:String,

    },
    uptdate:{
        type:Date,
        default:Date.now
    }
    // ,
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }

});

const File=mongoose.model('File',fileSchema);
module.exports=File;