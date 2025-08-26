import mongoose from "mongoose";
import MeetingModel from "../Models/BookMeetingModel.js";

export default async function MeetingDetailsController(req, res) {
  const { id } = req.query;

  console.log("Received ID:", id.length);

  

  try {

    if(id.length >24){
        return res.json({
            statusCode:404,
            error:'Id format is incorrect'
        })
    }
    const response = await MeetingModel.findOne({_id:id});

    if (!response) {
      return res.status(404).json({
        statusCode: 404,
        errorMessage: "Meeting not found",
      });
    }

    return res.status(200).json({
      statusCode: 200,
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      errorMessage: "Server error",
    //   error: error.message,
    });
  }
}
