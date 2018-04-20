let mongoose = require('mongoose');

mongoose.model("Pet", new mongoose.Schema({
    name:{type:String, required:true, minlength:3, maxlength:255, unique:true }, 
    type:{type:String, required:true, minlength:3, maxlength:255}, 
    desc:{type:String, required:true, minlength:3, maxlength:255}, 
    skills:{type: [{ type:String, minlength:3, maxlength:255 }], default: [] },
    likes: {type:Number, default:0}
    }, {timestamps: true} 
));