const AdvertisementTypes = require('../models/AdvertisementTypes.model')
const AdvertisementTypesController = {
    Add: async function (req, res) {
        try {
            const { name } = req.body
            const data = await AdvertisementTypes.create({ name })
            res.status(200).json({ message: "Advertisement Type added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Advertisement Type" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await AdvertisementTypes.find()
            res.status(200).json({ message: "getting all Advertisement Types....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Advertisement Types" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await AdvertisementTypes.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting Advertisement Types" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name } = req.body
            const data = await AdvertisementTypes.findByIdAndUpdate(id, { name }, { new: true })
            if (data) {
                res.status(200).json({ message: "Advertisement Status updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the Advertisement Status" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await AdvertisementTypes.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Advertisement Status deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Advertisement Status" })

        }
    }
}
module.exports = AdvertisementTypesController;