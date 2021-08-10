const mongoose = require("mongoose");

const Test = mongoose.model("Test",
  new mongoose.Schema({
    id:String,
    name:String,
    Content:String, //lưu đề bài
    Sample:[{
        input:String,
        output:String,

    }],
    result:[
        {
            input:{
                Source:String,
                Value:String
            },
            output:{
                Source:String,
                Value:String
            },
            isHide:Boolean, //check xem đáp án có bị ẩn hay không
            maxRuntime:Number,
            Point:Number
        }
    ],
    
  })
);

module.exports = Test;
