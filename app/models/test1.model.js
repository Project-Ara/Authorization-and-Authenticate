const mongoose = require("mongoose");

const Test = mongoose.model("Test",
  new mongoose.Schema({
    id:String,
    joinCode:String,
    name:String,
    Quesid:String,
    User:[],
    MamageUser:String,
  })
);

module.exports = Test;
