const mongoose=require("mongoose")
const ListSchema=new mongoose.Schema({
    todo:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        require:true
    }
})
module.exports=mongoose.model('ToDoSchema',ListSchema)