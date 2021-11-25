const { Router } = require('express');
const Course = require('./../models/Course')

const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add course'
    })
})

router.post('/', (req, res) => {
        console.log(req.body)
        const course = new Course(req.body.title, req.body.price, req.body.img);
        course.save()

    res.redirect('/courses')
})

module.exports = router