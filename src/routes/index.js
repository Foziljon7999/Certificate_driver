const {Router} = require("express")
const categoriesRouter = require("../modules/categories/routes")
const authRouter = require("../modules/auth/routes")
const usersRouter = require("../modules/users/routes")
const questionRouter = require("../modules/question/routes")
const testRouter = require("../modules/test/routes")


const router = Router()

router.use("/categories", categoriesRouter)
router.use("/", authRouter)
router.use("/users", usersRouter)
router.use("/questions", questionRouter)
router.use("/test", testRouter)


module.exports = router