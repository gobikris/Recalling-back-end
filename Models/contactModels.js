const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add your name"],
    },
    email: {
        type: String,
        required: [true, "Please add your email"],
    },
    phone:{
        type: String,
        required: [true, "Please add your phone"],
    },
    
},
{
timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);