import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  cnic:{
    type: Number,
    required: true,
    minlength: 13,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, 
  },
   isVerified: {
    type: Boolean,
    default: false
  },
  type:{
    type:String,
    default: "user",
    enum: ['user','Deparment', 'Receptionist']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true 
});

const User = mongoose.model("User", userSchema)

export default User