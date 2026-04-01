
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

  name: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 28,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is required"],
    lowercase: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 2,
    maxLength: 28,
    required: [true, "Password is required"],
    select: false
  },
  role: {
    type: String,
    trim: true,
    enum: ["customer", "seller", "admin"],
    default: "customer"
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String,
    select: false
  },
  refreshToken: {
    type: String,
    select: false
  },
  resetPasswordToken: {
    type: String,
    select: false
  },
  resetPasswordExpires: {
    type: Date,
    select: false
  }

}, { timestamps: true })


const User = mongoose.model("User", userSchema)

export default User