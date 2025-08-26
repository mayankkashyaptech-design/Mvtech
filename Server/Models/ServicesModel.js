import mongoose from "mongoose";



let ServiceSchema=new mongoose.Schema({
    service_title:{
        type:String,
        unique:true
    },
    service_discription:{
        type:String,
        required:true
    }
})
let ServicesModel=mongoose.model('services',ServiceSchema);


export {ServicesModel};