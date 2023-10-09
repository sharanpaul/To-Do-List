const express=require("express")
const mongoose=require("mongoose")
const ListSchema=require("./models/schema")
const app=express()

mongoose.connect('mongodb+srv://admin:admin@cluster0.35fn6ak.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true
})


app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req,res) => {
    const data=await ListSchema.find()
    //console.log(data)
    res.render('index',{datas:data})
})


app.post('/todolist', async (req,res) => {
    await ListSchema.create({todo: req.body.tododata, date:req.body.date})
    res.redirect('/')
})


app.get('/delete/:id', async (req,res)=> {
    const id=req.params.id
    const delid=await ListSchema.deleteOne({todo:id})
    console.log(delid)
    res.redirect('/')
})


app.listen(4000)