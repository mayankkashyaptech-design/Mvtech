import MeetingModel from "../Models/BookMeetingModel.js";

export default async function BookMeetingControler(req, res) {
  let data = req.body;
  
  let { name, phoneNo, email, message, preferred_date, preferred_time, Meeting_type } = data;
//   console.log(data)
  let obj = DateInfo();
  let { dayName, monthName, year, fullDate } = obj;

  
  
  try {
    const meetingCount = await MeetingModel.countDocuments({
        email,
        'Additional_info.applyed_mounthName': monthName,
        'Additional_info.applyed_year': year.toString(),
      });
  
      if (meetingCount >= 5) {
        return res.json({statusCode:404, message: "You have already applied for 3 meetings this month. Meeeting can be sheadule 3times a mounth??" ,bookMeeting:false});
      }

    let meeting = new MeetingModel({
      name: name,
      PhoneNo: phoneNo,
      email: email,
      Message: message,
      Preferred_date: preferred_date,
      Preferred_time: preferred_time,
      Meeting_type: Meeting_type,
      Additional_info: {
        applyed_dayName: dayName,
        applyed_mounthName: monthName,
        applyed_year: year.toString(),  // Year should be string, as per schema
        applyed_date: fullDate,
      }
    });

    await meeting.save();

    res.status(200).json({statusCode:200, message: "Meeting booked successfully!",bookMeeting:true });

  } catch (error) {
    console.error(error);
    res.json({statusCode:500, message: "Internal server error" });
  }
}

function DateInfo() {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');

  return {
    dayName: now.toLocaleDateString('en-US', { weekday: 'long' }),
    monthName: now.toLocaleDateString('en-US', { month: 'long' }),
    year: now.getFullYear(),
    fullDate: `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`,
    day: pad(now.getDate()),
    month: pad(now.getMonth() + 1),
  };
}
