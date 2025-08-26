export default function ServiceOrderControler(req,res){
    let data=req.body;
    console.log(data)

   res.json({
      message:"OK",
       requested:"true"
   })

}