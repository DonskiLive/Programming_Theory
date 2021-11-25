const express = require('express')
const cors = require('cors')
const PORT = 8080
const db = require('./models')
const authRoutes = require('./routes/auth.routes')
const authJwt = require('./middlewares/authJwt')

const app = express()

let corsOptions = {
    origin:'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sequelize.sync()
authRoutes(app)

app.get('/', (req,res) =>{
    res.json({message:'Hello world!'})
})

app.get('/test', [authJwt], (req, res) =>{
    res.send({message: "it's worked!"})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})