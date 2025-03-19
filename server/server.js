const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Usermodel = require('./User')
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(()=>console.log('DB Connect'))    
.catch(err=>console.log(err))
//Create API End Points (HTTP Request,Response)
app.get('/',(req,res)=>{
res.send('Welcome to Node JS Server')
})
app.post('/RegisterForm',(req,res)=>{
    Usermodel.create(req.body)
    .then(res.json('Data Saved Successfully'))
    .catch(err=>res.json(err))
    })
//config PORT and Start Server
const PORT = 9000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
}) 