import mongoose from "./index.js";
import { verifyEmail, verifyMobile } from "./../common/validations.js";

let Schema = mongoose.Schema,
objectId= Schema.ObjectId;

const bookingSchema = new Schema({
  roomId:{
    type:String,
    required:true
  },
  employeeId:{
    type:String,
    required:true
  },
  startTime:{
    type:Date,
    required:true
  },
  endTime:{
    type:Date,
    required:true
  },
  status:{
    type:Boolean,
    default:true
  }
},
{
  collection:'booking',
  versionKey:false
});

export default new mongoose.model('booking',bookingSchema)