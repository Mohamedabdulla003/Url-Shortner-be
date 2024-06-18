const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = schema({
    name:{
        type:String,
        requried:true,
    },
    email: {
        type:String,
        requried: true,
        unique: true,
    },
    password: {
        type:String,
        requried:true,
    },
    idActivated: {
        type:Boolean,
        default:false,
    },
    pwdResetCode: {
        type: String,
        default: undefined,
    },
});

const User =mongoose.model("User",userSchema,"userCollection");
module.exports = User;