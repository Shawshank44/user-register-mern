const router = require('express').Router()
const bcrypt = require('bcrypt')
const {Users} = require('../models/schema')
const joi = require('joi')


const validate =(data)=>{
    const schema = joi.object({
        email: joi.string().email().required().label("email"),
        password : joi.string().required().label("password")
    })
    return schema.validate(data)

}



router.post("/login",async(req,res)=>{
    try {
        const {err} = validate(req.body)
        if (err) {
            return res.status(400).send({message: "this is shit"})
        }
        const user = await Users.findOne({email : req.body.email})
        if (!user){
            return res.status(401).send({message : "Invalid Email and Password"})
        }
        const validpassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!validpassword){
            return res.status(401).send({message : "Invalid password"})
        }
        const token = user.generateAuthToken()
        res.status(200).send({token : token, message :"User logged in success"})
    } catch (e){
        res.status(500).send({message : "Server Err"})
        console.log(e)
        
    }
})

module.exports = router 