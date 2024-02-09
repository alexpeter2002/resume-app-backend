const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const resumeRouter=require("./controller/resumeRouter")

const app=express()

app.use(express())
app.use(cors())
mongoose.connect("mongodb+srv://alexpeter2002:alexpeter2002@cluster0.xcoplqs.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/resume",resumeRouter)

app.listen(3001,()=>{
    console.log("server running")
})