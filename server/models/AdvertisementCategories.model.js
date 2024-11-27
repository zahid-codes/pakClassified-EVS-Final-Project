const mongoose = require("mongoose")
const { Schema } = mongoose;
const AdvertisementCategoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
})
const AdvertisementCategories = mongoose.model("AdvertisementCategories", AdvertisementCategoriesSchema);
module.exports = AdvertisementCategories;