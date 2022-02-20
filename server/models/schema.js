const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const joi = require('joi')
const password_complexity = require('joi-password-complexity')

const User = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type :String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})
User.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id},'secret',{
        expiresIn : "7d"
    })
    return token
}
const Users = mongoose.model("user", User)

const validates = (data)=>{
    const schema = joi.object({
        name : joi.string().required().label('name'),
        email : joi.string().required().label('email'),
        password : password_complexity().required().label('password'), 
    })
    return schema.validate(data)
}



module.exports = {Users,validates}