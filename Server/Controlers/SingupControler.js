
import bcrypt from "bcryptjs";
import {UserModel} from "../Models/UserModel.js";
 const SingupControler=async(req,res)=>{
 let {name ,email,password,phoneNo}=req.body;
 let user_exist = await UserModel.findOne({
  $or: [{ email: email }, { phoneNo: phoneNo }]
});

 if(user_exist===null){
  const hashedPassword = await bcrypt.hash(password, 10);
   let User=new UserModel({
     name,
     email,
     phoneNo,
     password: hashedPassword
   })
   await User.save();
   return res.json({
      statusCode: 200,
      singup_user: true
   })
 }
 else{
   const error = {};
   if (user_exist.email === email) {
     error.email = "Email already in use. Try a different one!";
   }
   if (user_exist.phoneNo === phoneNo) {
     error.phoneNo = "Phone number already in use. Try a different one!";
   }

   return res.json({
      statusCode:400,
     error:error,
     singup_user: false
   });

 }
 
   

}

export default SingupControler;