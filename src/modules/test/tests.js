const Test = require('../test/model')
const Question = require('../question/model')

const getTests = async(req, res) => {
    const { categoryId } = req.query
     
    try {
        const questions = await Question.find({category: categoryId})
        res.send(questions)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const postTests = async(req, res) => {
    const { userId, categoryId, answers } = req.body

    try {
        let correctAnswer = 0
        const totalQuestions = answers.length

        for(const answer of answers) {
            const question = await Question.findById(answer.questionId)
            const correctQuestion = question.options.find(opt => opt.isCorrect)

            if(correctOption && correctOption.text === answer.selectedOption){
                correctAnswer++
            }
        }

        const score = (correctAnswers / totalQuestions) * 100
        const passed = score >= 80

        const test = new Test({
            user: userId,
            category: categoryId,
            questions: answers,
            score,
            passed
        })

        await test.save()
        res.send({score, passed})
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    getTests,
    postTests
}