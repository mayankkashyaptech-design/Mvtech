export default function EmailValidation(data){
    let NewError={};
    if(!data.email){
        NewError.email="Email is Required!!"
    }


    return {
        error:NewError,
        length:Object.keys(NewError).length
    }
}