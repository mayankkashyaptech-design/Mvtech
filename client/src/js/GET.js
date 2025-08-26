const API_URL=import.meta.env.VITE_API_BASE_URL; 
export default async function  GET(path){
    try{
    let responce = await fetch(`${API_URL}/${path}`);
 let res=await responce.json();
//  console.log(res)
 return res.data
}catch(error){
    // console.log("/")
}
}



