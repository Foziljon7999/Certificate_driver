const mongoose = require("mongoose")

const mongo = async () => {
    return await mongoose.connect("mongodb://localhost:27017/certificate")
}

module.exports = mongo