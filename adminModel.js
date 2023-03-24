const mongoose = require("mongoose"); 

const AdminSchema = new mongoose.Schema({
  
  password: {
    type: String,
    required: true,
    min: 8,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);