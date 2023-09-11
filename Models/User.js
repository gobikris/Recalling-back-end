const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        max:50,
    },
    password:{
        type: String,
        required: true,
        min:5
    },
    picturePath:{
        type: String,
        required: true,
        min:5
    },
    friends:{
        type: String,
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
},
{timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);