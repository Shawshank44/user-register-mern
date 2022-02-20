const router = require('express').Router()
const {Users,validates} = require('../models/schema')
const bcrypt = require('bcrypt')


router.post("/register", async (req,res)=>{
    try {
        const {err} = validates(req.body)
        if (err){
            return res.status(400).send({message : "this is invalid"})
        }
        const userExist = await Users.findOne({email : req.body.email})
        if (userExist) {
            return res.status(409).send({message : "user already exist"})
        }
        const salt = await bcrypt.genSalt(Number(10))
        const hashpassword = await bcrypt.hash(req.body.password , salt)
        await new Users({...req.body, password : hashpassword}).save()
        console.log('User Created successfully')
        res.status(201).send({success : "User Registered"})
    } catch (e) {
        console.log(e)
        res.status(500).send({message : "internal"})
        
    }

})

module.exports = router 