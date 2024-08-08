const {Router} = require("express")
const { create, getAll } = require("./categories")
const { verifyToken, verifyRole } = require("../../middleware/authMiddleware")

const categoriesRouter = Router()

categoriesRouter.get("/all", getAll)
categoriesRouter.post("/create", verifyToken, verifyRole("admin"), create)

module.exports = categoriesRouter