const mongoose = require("mongoose")
const { Schema } = mongoose;
const ContriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: Number,
        required: true,
        unique: true
    }
})
const Contries = mongoose.model("Contries", ContriesSchema)
module.exports = Contries;