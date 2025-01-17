import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'please provide name'],
        minlength: 3,
        maxlength: 20,
        trim:true
    },
    email: {
        type:String,
        required: [true, 'please provide email'],
        validate: {
            validator: validator.isEmail,
            message: "please provide valid email"
        },
        unique: true
    },
    password: {
        type:String,
        required: [true, 'please provide password'],
        minlength: 3,
        select: false
    }, 
    phone: {
        type:String,
        maxlength: 12,
        minlength: 11,
        trim:true,
        default: "01278416263"

    },
    birth: {
        type:String,
        maxlength: 10,
        minlength: 4,
        trim:true,
        default: '2002',

    },
    
})

UserSchema.pre('save', async function() {
    if(!this.isModified('password')) return 
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function(){
    return jwt.sign({ userId: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME})
} 

UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', UserSchema)