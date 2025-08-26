import MeetingModel from "../Models/BookMeetingModel.js";

export default async function GetAllMeetings(req, res) {
    try {
        const count = await MeetingModel.countDocuments();

        if (count === 0) {
            return res.json({
                statusCode: 404,
                message: "No meetings found"
            });
        }

        const meetings = await MeetingModel.find({});
         function getsomedata(meetings){
            let meeting=[];
           meetings.forEach((element=>{
            let {name,email,PhoneNo,Meeting_type,_id}=element;
               let obj={
                 name:name,
                 id:_id,
                 email:email,
                 PhoneNo:PhoneNo,
                 Meeting_type:Meeting_type,
                
               }
               return meeting.push(obj)

           }))
           return meeting;
         }


   let result=getsomedata(meetings);

        return res.json({
            statusCode: 200,
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            statusCode: 500,
            message: "Server error",
            error: error.message
        });
    }
}
