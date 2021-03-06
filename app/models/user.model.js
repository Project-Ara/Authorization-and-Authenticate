const mongoose = require("mongoose");

const User = mongoose.model("User",
  new mongoose.Schema({
    id:String,
    fullname:String,
    username: String,
    email: String,
    password: String,
    class:[String],
    roles: [{type: mongoose.Schema.Types.ObjectId,ref: "Role"}],
    

  })
);

module.exports = User;
