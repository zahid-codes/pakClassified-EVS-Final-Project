const mongoose = require("mongoose")
const { Schema } = mongoose;
const CityAreaSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    CityId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cities"
    }
})
const CityArea = mongoose.model("CityArea", CityAreaSchema)
module.exports = CityArea;