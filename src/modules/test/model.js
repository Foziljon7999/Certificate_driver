const mongoose = require("mongoose")

const testSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    questions: [{
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true
        },
        selectedOption: {
            type: String,
            required: true
        }
    }],
    score: Number,
    passed: Boolean
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test