import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../Models/UserModel.js";

export default async function LoginControler(req,res){
    let {email,password}=req.body;
    let user_exist = await UserModel.findOne({email:email });
      
    


    if(user_exist===null){
        
        
        return res.json({
           statusCode:400,
           error:{email:"Email does not exist Try a different one!"},
          login_user: false
        });

    }
    else{
        let DB_pass=await bcrypt.compare(password,user_exist.password);
        
          if(!DB_pass){
            return res.json({
                statusCode:400,
                error:{password:"password is worng"},
               login_user: false
             }); 
          }else{
            let payload={
                name:user_exist.name,
                email:user_exist.email,
                phoneNo:user_exist.phoneNo
            }
            
              let token=await jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'});
               
          
        return res.json({
           statusCode: 200,
           login_user: true,
           token
        })
    }
   
    }
    
}