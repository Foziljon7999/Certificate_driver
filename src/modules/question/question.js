const Question = require("./model")

const createQuestion = async(req, res) => {
    const { categoryId, text, options } = req.body
    try {
        const question = new Question({
            category: categoryId, text, options
        })
        await question.save()
        res.send(question)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
} 

const getQuestion = async(req, res) => {
    try {
        const questions = await Question.find().populate('category')
        res.send(questions)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const updateQuestion = async (req, res) => {
    const { id } = req.params
    const { text, options } = req.body

    try {
        const question = await Question.findByIdAndUpdate(id, {text, options}, { new: true})
        res.send({
            success: true,
            data: question
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const deleteQuestion = async (req, res) => {
    const { id } = req.params

    try {
        await Question.findByIdAndDelete(id)
        res.send({
            success: true,
            message: "Deleted"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    getQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion
}