import { configDotenv } from "dotenv";
configDotenv();
import cluster from "cluster";
import express from "express";
// import upload from "./Models/Multermodel.js";
import cors from "cors";
import { main, UserModel } from "./Models/UserModel.js";
import os from "os";
import bodyparser from 'body-parser';
import SingupControler from "./Controlers/SingupControler.js";
import SingupValidation from "./MiddleWares/SingupValidation.js";
import LoginValidation from "./MiddleWares/LoginValidation.js";
import LoginControler from "./Controlers/LoginControler.js";
import VerifyUser from "./Controlers/VerifyUser.js";
import ForgetValidation from "./MiddleWares/ForgetValidation.js";
import ForgrtPassControler from "./Controlers/ForgetPassControler.js";
import VerifyResetPassToken from "./Controlers/VerifyResetPassToken.js";
import ResetPassValidation from "./MiddleWares/ResetPassValidation.js";
import ResectPassControler from "./Controlers/ResetPassControler.js";
import ServicesControler from "./Controlers/ServicesControler.js";
import SendMailControler from "./Controlers/SendMailControler.js";
// import ProfileImgControler from "./Controlers/ProfileImgControler.js";
import BookMeetingControler from "./Controlers/BookMeetingControler.js";
import ServiceOrderControler from "./Controlers/ServiceOrderControler.js";
import GetAllMeetings from "./Controlers/GetAllMeetings.js";
import MeetingDetailsControler from "./Controlers/MeetingDetailsControler.js";
// import session from "express-session";
// imp0ort passport from "passport";
// import { Strategy as GoogleOAuth2Strategy } from 'passport-google-oauth20';

const totalCpu = os.cpus().length;
main().catch(err => console.log(err));

if (cluster.isPrimary) {
    for (let i = 0; i < totalCpu; i++) {
        cluster.fork();
    }
} else {
    const app = express();

    // CORS configuration
    app.use(cors({
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    }));

    // Session setup
  
    // Body parser for JSON
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.post('/verify-user', VerifyUser);
    app.post('/singup', SingupValidation, SingupControler);
    app.post("/login", LoginValidation, LoginControler);
    app.post('/verify-email', ForgetValidation, ForgrtPassControler);
    app.post('/verify-resetpass-token', VerifyResetPassToken);
    app.post('/reset-password', ResetPassValidation, ResectPassControler);
    app.get('/services', ServicesControler);
    app.post('/send-mail', SendMailControler);
    // app.post('/profile-img', upload.single('profileImg'), ProfileImgControler);
    app.post('/book-meeting', BookMeetingControler);
    app.post('/service-order', ServiceOrderControler);
    app.get('/get-all-meetings', GetAllMeetings);
    app.get('/meeting-details', MeetingDetailsControler);
     
   
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}...`);
    });
}
