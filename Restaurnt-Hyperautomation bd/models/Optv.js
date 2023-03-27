const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  created: {
    type: String,
    default: new Date().toISOString(),
  },
  location:{
    type : String,
    require:true,
  },
  otp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Userlog', userSchema);