const { Router } = require('express')
const { getQuestion, createQuestion, updateQuestion, deleteQuestion } = require('./question')
const { verifyToken, verifyRole } = require('../../middleware/authMiddleware')

const questionRouter = Router()

questionRouter.get("/all", verifyToken, verifyRole("admin"), getQuestion)
questionRouter.post("/create", verifyToken, verifyRole("admin"), createQuestion)
questionRouter.patch("/update/:id", verifyToken, verifyRole("admin"), updateQuestion)
questionRouter.delete("/delete/:id", verifyToken, verifyRole("admin"), deleteQuestion)

module.exports = questionRouter