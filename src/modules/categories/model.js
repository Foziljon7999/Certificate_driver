const {model, Schema, Types} = require("mongoose")

const categorySchema = new Schema({
    name : {
        type: String,
        required: true
    }
}, {
    collection: "categories"
})

module.exports = model('Category', categorySchema)