const Advertisements = require('../models/Advertisements.model')
const AdvertisementsController = {
    Add: async function (req, res) {
        try {
            const { name, price, description, postedById, startsOn, endsOn, statusId, typeId, categoryId, cityId, cityAreaId } = req.body
            const image = req.file ? `uploads/${req.file.filename}` : null
            if (!image) res.status(400).json({ message: "image is required" })
            const data = await Advertisements.create({ name, price, description, postedById, startsOn, endsOn, statusId, typeId, categoryId, cityId, cityAreaId, image })
            res.status(200).json({ message: "Advertisement added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Advertisement" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await Advertisements.find().populate("postedById", "name").populate("statusId", "name").populate("typeId", "name").populate("categoryId", "name").populate("cityAreaId", "name").populate("cityId").sort({
                createdAt: -1
            })
            res.status(200).json({ message: "getting all Advertisements....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Advertisements" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Advertisements.findById(id).populate("postedById", "name").populate("statusId", "name").populate("typeId", "name").populate("categoryId", "name").populate("cityAreaId", "name").populate("cityId")

            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting the Advertisement" })
        }
    },
    Update: async function (req, res) {

        try {
            const id = req.params.id
            console.log(id);
            console.log(req.body);
            console.log(req.file);

            const { name, price, description, startsOn, endsOn, typeId, categoryId, cityId, cityAreaId } = req.body
            const image = req.file && `uploads/${req.file.filename}`
            const data = await Advertisements.findByIdAndUpdate(id, { name, price, description, startsOn, endsOn, typeId, categoryId, cityId, cityAreaId, image }, { new: true })
            if (data) {
                res.status(200).json({ message: "Advertisement updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the Advertisement" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Advertisements.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Advertisement deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Advertisement" })

        }
    }
}
module.exports = AdvertisementsController;