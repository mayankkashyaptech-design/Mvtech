export default function ResetPassValidation(data){
    let NewError={};
    if(!data.newpassword){
        NewError.newpassword="New password is Required";
    }else if(data.newpassword.length < 6 || data.newpassword.length >8){
        NewError.newpassword="new password must be between 6 to 8char long!!"
    }
    if(!data.confirmpassword){
        NewError.confirmpassword="confirm assword is required!!";
    }else if(data.confirmpassword.length < 6 || data.confirmpassword.length >8){
        NewError.confirmpassword="confirm password must be between 6 to 8char long!!"
          
    }else if(data.newpassword!==data.confirmpassword){
        NewError.confirmpassword="confirm password must be same as new password!!"
    }
    if(Object.keys(NewError).length >0){
        return {
            error:NewError
        }
    }
    return{
    
        length:Object.keys(NewError).length
    }
}