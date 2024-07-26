import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactModel = mongoose.model("Contact", contactSchema);

export default contactModel;
