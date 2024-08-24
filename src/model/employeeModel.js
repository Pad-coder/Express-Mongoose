import mongoose from "./index.js";
import { verifyEmail, verifyMobile } from "./../common/validations.js";

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
        validator: verifyEmail,
        message: (props) => `${props.value} is not a valid Email`,
    }
  },
  mobile: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    validate: {
        validator: verifyMobile,
        message: (props) => `${props.value} is not a valid Phone number`,
    }
  },
  password:{
    type:String,
    required:[true,"Password is required"],
  },
  role: {
    type: String,
    enum: ["employee", "admin"],
    message: "{value} is not supported",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
},
{
  collection:'employee',
  versionKey:false
});

const employeeModel = new mongoose.model('employee',employeeSchema)

export default employeeModel;