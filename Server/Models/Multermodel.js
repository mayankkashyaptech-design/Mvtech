import multer from 'multer';


let Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        return cb(null,'/Uploads/ProfileImgs')
    },
    filename:(req,file,cb)=>{
        return cb(null , `${Date.now()}-${file.originalname}`);
    }
})


let upload=multer({Storage});


export default upload;


