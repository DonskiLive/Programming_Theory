const db = require('../models')
const Todo = db.todos

exports.create = (req, res)=>{
    console.log(req.body)
    if(!req.body.title){
        res.status(400).send({
            message:'Request body title is empty'
        })
        return null
    }
    const todo = {
        title: req.body.title
    }

    Todo.create(todo)
        .then(data => {res.send(data)})
        .catch(err =>{
            res.status(500).send({
                message: err.message
            })
        })
}

exports.findAll = (req,res)=>{
    Todo.findAll()
    .then(data => res.send(data))
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.findOne = (req, res)=>{
    const id = req.params.id
    Todo.findByPk(id)
    .then(data => res.send(data))
    .catch(err =>{
        res.status(500).send({
            message: err.message
        })
    })
}

exports.update = (req, res) =>{
    const id = req.params.id
    Todo.update(req.body, {
        where: {id}
    })
    .then(num =>{
        if(num == 1){
            res.send({message: 'Todo was successfully updated'})
        }else{
            res.send({message:`Cannot update Todo with id ${id}`})
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message
        })
    })
}

exports.delete = (req, res)=>{
    const id = req.params.id

    Todo.destroy({
        where:{id}
    })
    .then(num =>{
        if(num==1){
            res.send({message: 'Todo was successfully deleted'})
        }else{
            res.send({message:`Cannot delete Todo with id ${id}`})
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findAllByComleted = (req, res)=>{
    console.log(req.body)
    const completed = req.body.completed

    Todo.findAll({
        where:{completed}
    })
    .then( data => res.send(data))
    .catch(err =>{
        res.status(500).send({
            message: err.message
        })
    })
}