import { configDotenv} from 'dotenv'
import nodemailer from 'nodemailer'
configDotenv();
export default async function SendMailControler(req,res){
  // try{
  let data=req.body;
  console.log(req.body)
  let {email,name,phone,message}=req.body;
  // console.log(data)
  const auth=nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    service:"gmail",
    secure:true,
    port:465,
    logger:true,
    debug:true,
    secureConnection:false,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
            }
});
const mailOptions = {
    from: `"${name}" `,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    replyTo: email,
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #F9FAFB; border-radius: 8px; border: 1px solid #E5E7EB;">
        <h2 style="font-size: 24px; font-weight: 600; color: #4F46E5; margin-bottom: 20px;">📬 Contact Request</h2>
        <div style="margin-bottom: 12px;">
          <strong style="color: #111827;">Name:</strong>
          <span style="color: #374151;">${name}</span>
        </div>
        <div style="margin-bottom: 12px;">
          <strong style="color: #111827;">Email:</strong>
          <span style="color: #374151;">${email}</span>
        </div>
        <div style="margin-bottom: 12px;">
          <strong style="color: #111827;">Phone:</strong>
          <span style="color: #374151;">${phone}</span>
        </div>
        <div>
          <strong style="color: #111827;">Message:</strong>
          <p style="color: #374151; white-space: pre-line; margin-top: 8px;">${message}</p>
        </div>
        <footer style="margin-top: 30px; font-size: 12px; color: #9CA3AF;">Sent via MV Tech contact form</footer>
      </div>
    `
  };
  try{
    auth.sendMail(mailOptions,(error,emailres)=>{
      if(error){
        return res.json({
          statusCode:404,
          send_mail:false
         }) 
          console.log(error);
      }else{
         return res.json({
          statusCode:200,
          send_mail:true
         })
          // console.log("sucesses!");
      }
    })
    
  }catch(error){
    return res.json({
      statusCode:500,
      error:'Internal error something went wrong..!'
    })
  }
}