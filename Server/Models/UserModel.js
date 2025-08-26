import mongoose from "mongoose";
import { configDotenv } from "dotenv";
// import { type } from "os";
// import { authtoken } from "ngrok";
configDotenv()

let UserSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    password: { 
        type: String, 
        required: true,
    },
    phoneNo: {
        type: String,
        unique: true, // Ensure phoneNo is unique
    },
    
    auth: {
        resetPasstoken: String,
    },
}, { timestamps: true });

// let UserModel = mongoose.model('users', UserSchema);
// console.log(process.env.Mongodb_url)
let UserModel=mongoose.model('users',UserSchema);
const main=async()=>{
await mongoose.connect(process.env.Mongodb_url); 
console.log('connected to Db') 
}


export {UserModel,main}