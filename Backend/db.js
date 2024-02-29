const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chiragjp512:12345678910@cluster0.ofbfiir.mongodb.net/Todo-App")
const todoSchema = mongoose.Schema ({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}