module.exports = app =>{
    const todoController = require('./../controllers/todo.controller')

    const router = require('express').Router()

    //create
    router.post('/', todoController.create)

    //get all todos
    router.get('/', todoController.findAll)

    //get one todo
    router.get('/:id', todoController.findOne)

    //update
    router.put('/:id',todoController.update )

    //delete
    router.delete('/:id', todoController.delete)

    //get by completed
    router.get('/comleted', todoController.findAllByComleted)

    app.use('/api/todos', router)

}