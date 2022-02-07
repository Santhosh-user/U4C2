const mongoose = require("mongoose") 

const UserSchema = new mongoose.Schema (
    {
        id: {type: Number, required: true, unique: true},
        firstName: {type: String, required: true},
        middleName: {type: String, required: false},
        lastName: {type: String, required: true},
        age: {type: Number, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
        gender: {type: String, required: false, default: "Female"},
        type: {type: String, required: false},
    },
    {
        timestamps: true
    }
)


//export pending

