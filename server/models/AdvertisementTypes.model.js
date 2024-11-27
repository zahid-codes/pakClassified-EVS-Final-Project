const mongoose = require("mongoose")
const { Schema } = mongoose;
const AdvertisementTypesSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
})
const AdvertisementTypes = mongoose.model("AdvertisementTypes", AdvertisementTypesSchema)
module.exports = AdvertisementTypes;