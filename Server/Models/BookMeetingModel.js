import mongoose from "mongoose";

let MeetingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  PhoneNo: {
    type: String,
    required: true,
  },
  Preferred_date: {
    type: String,
    required: true,
  },
  Preferred_time: {
    type: String,
    default: Date.now,
    required: true,
  },
  Meeting_type: {
    type: String,
  },
  Message: {
    type: String,
    required: true,
  },
  Additional_info: {
    applyed_mounthName: {
      type: String,
      required: true,
    },
    applyed_year: {
      type: String,
      required: true,
    },
    applyed_date: {
      type: String,
      required: true,
    },
    applyed_dayName: {
      type: String,
      required: true,
    },
    completed:{
      type:Boolean 
    }
  },
});

let MeetingModel = mongoose.model("meetings", MeetingSchema);

export default MeetingModel;
