const categoryModel = require("./model")

const create = async (req, res) => {
    try {
        let {name} = req.body
        let category = await categoryModel.create({name})
        await category.save()
        res.send({
            success: true,
            data: category
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const getAll = async(req, res) => {
    try {
        let categories = await categoryModel.find()
    res.send({
        success: true,
        data: categories
    })
    } catch (error) {
        res.status(error.status || 500).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    create,
    getAll
}