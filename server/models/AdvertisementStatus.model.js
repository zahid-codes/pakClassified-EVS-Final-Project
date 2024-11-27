const mongoose = require("mongoose");
const { Schema } = mongoose;
const AdvertisementStatusSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})
const AdvertisementStatus = mongoose.model("AdvertisementStatus", AdvertisementStatusSchema)
module.exports = AdvertisementStatus;
