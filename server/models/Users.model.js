const mongoose = require("mongoose")
const { Schema } = mongoose
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        // required: true,
    },
    RoleID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Roles",
        default: "671d133e5487f978c407ba51",
    }

}, { timestamps: true })
const User = mongoose.model("User", UserSchema)
module.exports = User;