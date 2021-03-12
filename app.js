const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()

mongoose.connect(process.env.MONGO_URL||"",()=>{
    console.log("connected")
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Listining")
})