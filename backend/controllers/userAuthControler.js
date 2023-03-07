const User = require('../Models/userAuth');
exports.register = async(req,res)=>{
    console.log(req.body);
    try{
 const userRegistered = await User.create(req.body);
 res.status(200).json(userRegistered);
    }catch(err){
        console.log(err)
    }
}
exports.login = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    const getUser = User.find({email:email})
console.log(getUser);
}