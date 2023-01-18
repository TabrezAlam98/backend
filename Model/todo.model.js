const mongoose=require("mongoose");

const todosSchema=mongoose.Schema({
   taskname:String,
   status:String,
   tag:String
})

const TodosModel=mongoose.model('todo_sample',todosSchema)

module.exports={TodosModel}