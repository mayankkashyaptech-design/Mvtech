
export default function SingupValidation(req,res,next){
    let data=req.body;
    let NewError={};
    if(!data.name){
        NewError.name="name is required!!"
    }else if(data.name.length < 3){
        NewError.name="name must be atleast 3char long!"
    }
    if(!data.email){
     NewError.email="email is rquired!!"
    }
    if(!data.phoneNo){
        NewError.phoneNo="phone No is required!!"
    }else if(data.phoneNo.length < 10){
        NewError.phoneNo="phoneNo must be 10 number long!!"
    }
    if(!data.password){
        NewError.password="password is required!!";
    }else if(data.password.length < 6){
        NewError.password="password must be atleast 6char long!!";
    }
    if (Object.keys(NewError).length > 0) {
        return res.json({ error:NewError, singup_user: false }); // 👈 early exit
    }
    next()
}