const mongoose = require("mongoose")
const { Schema } = mongoose;
const RolesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})
const Roles = mongoose.model("Roles", RolesSchema)
module.exports = Roles