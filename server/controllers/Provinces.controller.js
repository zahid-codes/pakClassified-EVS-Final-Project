const Provinces = require('../models/Provinces.model')
const ProvincesController = {
    Add: async function (req, res) {
        try {
            const { name, CountryId } = req.body
            const data = await Provinces.create({ name, CountryId })
            res.status(200).json({ message: "Province added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Province" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await Provinces.find()
            res.status(200).json({ message: "getting all Provinces....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Provinces" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Provinces.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting Province" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name, CountryId } = req.body
            const data = await Provinces.findByIdAndUpdate(id, { name, CountryId }, { new: true })
            if (data) {
                res.status(200).json({ message: "Province updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the Province" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Provinces.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Province deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Province" })

        }
    }
}
module.exports = ProvincesController;