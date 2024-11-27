const mongoose = require("mongoose")
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        require: true,
        maxLength: 50
    },
    description: {
        type: String,
        require: false,
    },
    image: {
        type: String,
        require: false,
        maxLength: 50
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true,
        ref: "Category"
    }
})

const SubCategory = mongoose.model("SubCategory", schema)

module.exports = SubCategory;