import { UserModel } from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
export default async function VerifyUser(req,res){
let {email}=req.body;
let user_exist=await UserModel.findOne({email:email});
if(user_exist===null){
        return res.json({
            statusCode:404,
            user_exist:false
    })
    }else{
        let payload={
                        name:user_exist.name,
                        email:user_exist.email,
                        phoneNo:user_exist.phoneNo
                    }
                    
                      let token=await jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'});
        return res.json({
            statusCode:200,
            user:true,
            // token
        })
    }
}