const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    task: String,
    complete: Boolean   
});

const todoModel = mongoose.model('TodoModel', todoSchema);
module.exports = todoModel;