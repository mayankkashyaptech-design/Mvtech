import { ServicesModel } from "../Models/ServicesModel.js";

export default async function ServicesControler(req,res){
   try{
    let services=await ServicesModel.find({});
    
    return res.json({
        v:"Ok",
        statusCode:200,
       data:services
    })
   }catch(error){
    return res.json({
        statusCode:400,
        data:false
    })
   }
}