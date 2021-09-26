const mongoose= require('mongoose');
const {registerValidation} = require('../validation/usersValidation');

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        required:[true,'نام و نام خانوادگی اجباری می باشد'],
    },
    email:{
        type:String,
        required:[true,'ایمیل اجباری می باشد'],
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:[true,'کلمه عبور اجباری می باشد'],
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
})

userSchema.statics.userValidation = function(body) {
    return registerValidation.validate(body,{abortEarly:false})
}

const User= mongoose.model('User',userSchema)

module.exports = User;