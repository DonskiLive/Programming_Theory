const db = require('../models')
const User = db.user

module.exports = (req, res, next) =>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user =>{
        if(user){
            res.status(400).send({
                message: 'Username is already in use!'
            })
            return null
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user =>{
            if(user){
                res.status(400).send({
                    message:'Email is already in use!'
                })
                return null
            }
            next()
        })
    })
}