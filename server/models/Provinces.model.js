const mongoose = require("mongoose")
const { Schema } = mongoose;
const ProvincesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    CountryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Contries"
    }

})
const Provinces = mongoose.model("Provinces", ProvincesSchema)
module.exports = Provinces;