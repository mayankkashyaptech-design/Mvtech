export default function ResetPassValidation(req,res,next){
    let {password}=req.body;
    let NewError={};
    if(!password.newpassword){
        NewError.newpassword="New password is Required";
    }else if(password.newpassword.length < 6 || password.newpassword.length >8){
        NewError.newpassword="new password must be between 6 to 8char long!!"
    }
    if(!password.confirmpassword){
        NewError.confirmpassword="confirm assword is required!!";
    }else if(password.confirmpassword.length < 6 || password.confirmpassword.length >8){
        NewError.confirmpassword="confirm password must be between 6 to 8char long!!"
          
    }else if(password.newpassword!==password.confirmpassword){
        NewError.confirmpassword="confirm password must be same as new password!!"
    }
    if (Object.keys(NewError).length > 0) {
        return res.json({ error:NewError, singup_user: false }); // 👈 early exit
    }
    next();
}