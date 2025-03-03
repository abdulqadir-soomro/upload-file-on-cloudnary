const User=require('./../models/user.models');

exports.createuser = async(req,res)=>{
    const {username,email,phonenum,address,designation,gender}=req.body

    try {
        let user= await User.findOne({email});

        if(user){
            return res.status(400).json({error:'User already exists'})
        }
        user=new User({
            username,
            email,
            phonenum,
            address,
            designation,
            gender
        })
        await user.save()
        res.status(200).json({message:'User created successfully'});

    } catch (error) {
        console.log( error)
        
    }
};





exports.getalluser=async(req,res)=>{
    try {
        let users= await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}

