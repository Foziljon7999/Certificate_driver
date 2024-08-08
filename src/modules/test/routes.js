const {Router} = require('express')
const { getTests, postTests } = require('./tests')

const testRouter = Router()

testRouter.get("/all", getTests)
testRouter.post("/post", postTests)

module.exports = testRouter