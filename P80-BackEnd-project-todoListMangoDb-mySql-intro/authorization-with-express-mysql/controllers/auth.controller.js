const db = require('../models')
const config = require('../configs/auth.config')
const User = db.user

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { user } = require('../models')

const USER_LOGIN_FAILED = 'Email or password is wrong'

exports.signup = (req, res)=>{
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, 8)
    })
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message
        })
    })
}

exports.signin = (req, res)=>{
    User.findOne({
        where:{
            username: req.body.username
        }
    })
    .then(user=>{
        if(!user){
            return res.status(401).send({
                message: USER_LOGIN_FAILED,
                accessToken: null
            })
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!passwordIsValid){
            return res.status(401).send({
                message: USER_LOGIN_FAILED,
                accessToken: null
            })
        }
        const token = jwt.sign({id:user.id}, config.secret, {
            expiresIn:86400
        })
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        })
    })
}