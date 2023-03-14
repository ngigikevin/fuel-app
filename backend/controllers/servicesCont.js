const Service = require('./../Models/service');

exports.addService = async(req, res)=>{
    try{
        const newService = await Service.create(req.body);
        res.status(200).json(newService)
    }catch(err){
        res.status(404).json(err)
        //console.log(err);
    }
};
exports.getAllServices = async(req, res)=>{
    try{
        const getServices = await Service.find();
        res.status(200).json(getServices);
    }catch(err){
        //console.log(err);
        res.statu(404).json(err);
     }
};