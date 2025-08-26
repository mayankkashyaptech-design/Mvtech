// import { UserModel } from "../Models/UserModel.js";
// import jwt from "jsonwebtoken";
// export default async function ForgrtPassControler(req,res){
//   let {email}=req.body;
//   try{
//     let user_exist=await UserModel.findOne({email:email});
//     if(!user_exist){
//         return res.json({
//             user_exist:false,
//             error:{email:'email does not exist!!'}
//         })
//     }
//     else{
//         let payload={
//             email:user_exist.email
//         }
//         let token=await jwt.sign(payload,'mvtechhai',{expiresIn:'60s'});
//         let responce = await UserModel.updateOne(
//             { email:email},
//             { $set: { "auth.resetPasstoken": `${token}` } }
//           );

          
//         return res.json({
//             user_exist:true,
//             statusCode:200,
//             resetLink:`/reset-pass?token=${token}`
//         })
//     }
    
//   }catch(err){
//     res.json({

//     })
//   }
// }


import { UserModel } from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export default async function ForgotPassController(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: { email: 'Email is required' }
    });
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        user_exist: false,
        error: { email: 'Email does not exist!' }
      });
    }

    const payload = { email: user.email };
    const token = jwt.sign(payload, 'mvtechhai', { expiresIn: '60s' });

    await UserModel.updateOne(
      { email },
      { $set: { "auth.resetPasstoken": token } }
    );

    return res.status(200).json({
      user_exist: true,
      statusCode: 200,
      resetLink: `/reset-pass?token=${token}`
    });

  } catch (err) {
    console.error('Forgot password error:', err);
    return res.status(500).json({
      success: false,
      error: { message: 'Something went wrong. Please try again later.' }
    });
  }
}
