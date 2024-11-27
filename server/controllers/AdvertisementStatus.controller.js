const AdvertisementStatus = require('../models/AdvertisementStatus.model')
AdvertisementStatus
const AdvertisementStatusController = {
    Add: async function (req, res) {
        try {
            const { name } = req.body
            const data = await AdvertisementStatus.create({ name })
            res.status(200).json({ message: "Advertisement Status added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Advertisement Status" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await AdvertisementStatus.find()
            res.status(200).json({ message: "getting all Advertisement Status....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Advertisement Status" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await AdvertisementStatus.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting Advertisement Status" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name } = req.body
            const data = await AdvertisementStatus.findByIdAndUpdate(id, { name }, { new: true })
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
            const data = await AdvertisementStatus.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Advertisement Status deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Advertisement Status" })

        }
    }
}
module.exports = AdvertisementStatusController;