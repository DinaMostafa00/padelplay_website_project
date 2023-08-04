import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    trim: true,
    minLength: [2, "First name must be longer than 2 characters"],
    maxLength: [70, "First name must be less than 70 characters"],
  },

  lastName: {
    type: String,
    required: [true, "Last name is required."],
    trim: true,
    minLength: [2, "Last name must be longer than 2 characters"],
    maxLength: [70, "Last name must be less than 70 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  message: {
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("contact", contactSchema);

export default Contact;
