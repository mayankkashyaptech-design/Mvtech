const API_URL=import.meta.env.VITE_API_BASE_URL; 
export default async function  POST(path,data){
    try{
    let responce = await fetch(`${API_URL}/${path}`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
 let res=await responce.json();
 return res;
}catch(error){
    console.log("/")
}
}

// const POST = async (url, data) => {
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
  
//       // Check if the response is valid
//       if (response.ok) {
//         return await response.json(); // If the response is OK, parse the JSON
//       } else {
//         const errorText = await response.text(); // If it's an error, get the HTML response
//         console.error('Error response:', errorText);  // Log HTML error page
//         throw new Error('Failed to fetch valid JSON');
//       }
//     } catch (error) {
//       console.error('Error in POST request:', error);
//       throw error;
//     }
//   };

// export default POST;  