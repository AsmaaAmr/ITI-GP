const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  phoneNumber: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
