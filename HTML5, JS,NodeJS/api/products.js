
const express=require('express')
const route=express.Router()

route.get('/',(req, res)=>{
    console.log("Sahi aa")
    res.send({msg:"Message of routing"})
})

module.exports=route