module.exports = {
    HOST:'localhost',
    PORT:'8889',
    USER:'',  // your mysql user name
    PASSWORD:'', // your mysql password
    DB:'',      //name of your databse on mysql
    dialect:'mysql',
    pool:{
        max: 5,
        min:0,
        acquire: 30000,
        idle:10000
    }
}