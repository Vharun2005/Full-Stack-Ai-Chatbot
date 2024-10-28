const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3500
const bodyparser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const connectDatabase = require('./data/ConnectDataBase')



connectDatabase().catch((err)=>{
    if(err){
        console.log(err)
    }
})
app.use(cors())
app.use(bodyparser.json())
app.use('/api',userRoutes)
app.get('/padu',(req,res)=>{
    res.send('working')
})


app.listen(PORT,(err)=>{
    if(err){
    console.log(err)
    }else{
        console.log('server is running on ' + PORT)
    }
})
