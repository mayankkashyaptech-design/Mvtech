export default function LoginValidation(req,res,next){
    let data=req.body;
    let NewError={};

    if(!data.email){
        NewError.email="email is rquired!!"
    }
    if(!data.password){
        NewError.password="password is required!!";
    }else if(data.password.length < 6){
        NewError.password="password must be atleast 6char long!!";
    }

    if(Object.keys(NewError).length > 0){
        return res.json({ error:NewError, login_user: false }); // 👈 early exit
    }
   next();
}