export default function LoginValidation(data){
    let NewError={};
    
    if(!data.email){
     NewError.email="email is rquired!!"
    }
    
    if(!data.password){
        NewError.password="password is required!!";
    }else if(data.password.length < 6){
        NewError.password="password must be atleast 6char long!!";
    }
    
    return{
       error: NewError,
       length: Object.keys(NewError).length
    }

}