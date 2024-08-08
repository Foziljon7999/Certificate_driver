const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    category: { 
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    text: {
        type: String,
        required: true
    }, 
    options: [{
        text: String,
        isCorrect: Boolean
    }]
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question