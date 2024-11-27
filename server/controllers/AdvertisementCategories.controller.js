const AdvertisementCategories = require('../models/AdvertisementCategories.model')
const AdvertisementCategoriesController = {
    Add: async function (req, res) {
        try {
            const { name, image } = req.body
            const data = await AdvertisementCategories.create({ name, image })
            res.status(200).json({ message: "Advertisement Category added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Advertisement Category" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await AdvertisementCategories.find()
            res.status(200).json({ message: "getting all Advertisement Categories....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Advertisement Categories" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await AdvertisementCategories.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting Advertisement Category" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name, image } = req.body
            const data = await AdvertisementCategories.findByIdAndUpdate(id, { name, image }, { new: true })
            if (data) {
                res.status(200).json({ message: "Advertisement Category updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the Advertisement Category" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await AdvertisementCategories.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Advertisement Category deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Advertisement Category" })

        }
    }
}
module.exports = AdvertisementCategoriesController;