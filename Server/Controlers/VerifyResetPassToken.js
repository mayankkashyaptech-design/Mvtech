import jwt from 'jsonwebtoken';
import { UserModel } from '../Models/UserModel.js';
export default async function VerifyResetPassToken(req,res){

     let {token}=req.body;
    //  console.log(token)
    
      try {
        let isValidtoken=await jwt.verify(token,'mvtechhai');
        // console.log(isValidtoken);
        
        if(isValidtoken){
           
                    let {email}=isValidtoken;
            
            if(!email){
                return res.json({
                    statusCode:404,
                    user_exist:false,

                })
            }else{
                let user=await UserModel.findOne({
                    email: email,
                    "auth.resetPasstoken": token
                })
                let isUserValidToken=!!user;
                if(isUserValidToken){
                    return res.json({
                        user_exist:true,
                        reset_pass_token:true,
                        statusCode:200
                    })
                }else{
                    return res.json({
                        user_exist:false,
                        reset_pass_token:false,
                        statusCode:404
                    })
                }
            
                }
                    
                }else{
                    return res.json({
                        user_exist:false,
                        reset_pass_token:false,
                        statusCode:404
                    })
                }

      } catch (error) {
        return res.json({
            jwt_token_path:"/error",
            statusCode:404,
            user_exist:false,
            error:{text:"you are not an authourised User hacker!!"}
        })
        // console.log(error)
      }



































    //  let {email}=decode_token;
     
    //  if(!email){
    //     return res.json({
    //         statusCode:404,
    //         user_exist:false,

    //     })
    //  }else{
    //     let user=await UserModel.findOne({
    //         email: email,
    //         "auth.resetPasstoken": token
    //       })
    //       let isValidToken=!!user;
    //       if(isValidToken){
    //         return res.json({
    //             user_exist:true,
    //             reset_pass_token:true,
    //             statusCode:200
    //         })
    //       }else{
    //         return res.json({
    //             user_exist:false,
    //             reset_pass_token:false,
    //             statusCode:404
    //         })
    //       }
        
    //  }
   
}