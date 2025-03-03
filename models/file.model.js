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

});

const File=mongoose.model('File',fileSchema);
module.exports=File;