// import express
const express = require('express')
require("./connection")
var empModel=require("./model/employe")
const Employemodel = require('./model/employe')
var cors = require('cors')
// intialize
const app = express()
app.use(express.json())
app.use(cors())
// api
app.get("/", (req ,res) => {
    res.send("hello world")
})
// (path name is written near /)
app.get("/trail", (req, res) => {
res.send("this is a trail message")
})
app.post("/add", async (req, res) =>{
    try {
        await empModel(req.body).save()
        res.send({message:"data added"})
        
    } catch (error) {
        console.log(error)
    
  }  
})
app.get("/view", async (req, res) => {
    try {
       data= await empModel.find()
        res.send(data)
        
    } catch (error) {
        
    }
})
app.delete("/remove/:id", async (req, res) => { 

    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    } catch (error) {
        console.log(error)
        
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({message:"data updated"})
    } catch (error) {
        console.log(error)
        
    }
})
// port setting(like local host in react)
app.listen(3005, () => {
    console.log("server is running on port 3004")
})
