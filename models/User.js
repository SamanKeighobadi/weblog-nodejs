const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
})

const User= mongoose.model('User',userSchema)

module.exports = User;