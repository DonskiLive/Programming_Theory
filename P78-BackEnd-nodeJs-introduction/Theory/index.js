const express = require('express')
const exphbs = require('express-handlebars')

const homeRouter = require('./routes/home')
const coursesRouter = require('./routes/courses')
const addRouter = require('./routes/add')


const app = express()

const hbs = exphbs.create({
    defaultLayout : 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')
app.set('views', 'pages')

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/', homeRouter)
app.use('/courses', coursesRouter )
app.use('/add', addRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})