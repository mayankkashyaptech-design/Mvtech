export default async function ForgetValidation(req,res,next){
    let data=req.body;
    let NewError={};
    if(!data.email){
        NewError.email="email is rquired!!"
    }
    if (Object.keys(NewError).length > 0) {
        return res.json({ error:NewError, singup_user: false }); // 👈 early exit
    }
    next();
}