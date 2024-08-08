const {Router} = require("express")
const { verifyToken, verifyRole } = require("../../middleware/authMiddleware")
const { getAllUsers, getUserById } = require("./users")


const usersRouter = Router()

usersRouter.get("/all", verifyToken, verifyRole("admin"), getAllUsers)
usersRouter.get("/:id", verifyToken, verifyRole("admin"), getUserById)

module.exports = usersRouter