const express=require("express")
const resumemodel=require("../model/resumemodel")

const router=express.Router()

router.post("/register",async(req,res)=>{
    let data=req.body
    let resume=new resumemodel(data)
    let result=await resume.save()
    res.json({
        status:"success"
    })
})

module.exports=router