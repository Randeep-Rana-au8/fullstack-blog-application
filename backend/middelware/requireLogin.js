const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../model/user')
const { JWT_SECRET } = require('../keys/keys')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({error:"you must be logged in"})
        }

        
        const {id} = payload.user
        User.findById(id).then(userdata=>{
            
            req.user = userdata
            next()
        })
        
    })
}