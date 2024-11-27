const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AdvertisementsSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    postedById: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        require: true,
    },
    startsOn: {
        type: Date,
        required: true,
        default: Date.now()
    },
    endsOn: {
        type: Date,
        required: true,
        default: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    },
    statusId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AdvertisementStatus",
        require: true,
        default: "6717cf5a23bf8b71e528189d"
    },
    typeId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AdvertisementTypes",
        require: true,
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "AdvertisementCategories",
        require: true,
    },

    cityId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cities",
        require: true,
    },
    cityAreaId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "CityArea",
        require: true,
    },
    image: {
        type: String,
        require: false,
    }
}, { timestamps: true })
const Advertisements = mongoose.model("Advertisements", AdvertisementsSchema)
module.exports = Advertisements;