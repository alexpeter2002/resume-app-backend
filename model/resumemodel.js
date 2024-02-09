const mongoose=require("mongoose")
const resumeSchema=new mongoose.Schema(
    {
        Name: String,
    Mobile: String,
    College: String,
    course: String,
    Email: String,
    Password: String,
    }
)
module.exports=mongoose.model("Students",resumeSchema)