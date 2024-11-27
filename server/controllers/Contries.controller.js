const Contries = require('../models/Contries.model')
const ContriesController = {
    Add: async function (req, res) {
        try {
            const { name, code } = req.body
            const data = await Contries.create({ name, code })
            res.status(200).json({ message: "Contry added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Contry" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await Contries.find()
            res.status(200).json({ message: "getting all Contries....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Contries" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Contries.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting Contries" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name, code } = req.body
            const data = await Contries.findByIdAndUpdate(id, { name, code }, { new: true })
            if (data) {
                res.status(200).json({ message: "Contries updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the Contries" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Contries.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Contry deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Contry" })

        }
    }
}
module.exports = ContriesController;