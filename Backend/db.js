const mongoose = require("mongoose");

mongoose.connect("...Connect DB Llink Here....")
const todoSchema = mongoose.Schema ({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}
