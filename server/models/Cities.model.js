const mongoose = require('mongoose')
const { Schema } = mongoose;
const CitesSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    ProvinceId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Provinces"
    }
})
const Cities = mongoose.model("Cities", CitesSchema)
module.exports = Cities;