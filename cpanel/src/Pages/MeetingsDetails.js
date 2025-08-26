import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalcontext } from '../Features/Context';
import MeetingDetailsCard from '../Components/MeetingDetailsCard';

export default function MeetingsDetails() {
     let {id}=useParams();
    //  console.log(id)
     let {API_URL}=useGlobalcontext();
     const[meetingData,setmeetingData]=useState({});
    useEffect(()=>{
      async function getMeetingDetails(id){
        let responce=await fetch(`${API_URL}/meeting-details?id=${id}`);
        let result=await responce.json();
        // console.log(data)
    setmeetingData(result?.data)
      }
      getMeetingDetails(id);
    },[])
  return (
    // <div>{JSON.stringify(meetingData)}MeetingsDetails</div>
    // <div className='mx-auto'>
        <MeetingDetailsCard 
        //    key={idx}
           name={meetingData?.name}
           MeetingType={meetingData?.Meeting_type}
           email={meetingData?.email}
           phoneNo={meetingData?.PhoneNo}
           message={meetingData?.Message}
           date={meetingData?.Preferred_date}
           time={meetingData?.Preferred_time}
           Additional_info={meetingData?.Additional_info}
        />
    // </div>
  )
}
