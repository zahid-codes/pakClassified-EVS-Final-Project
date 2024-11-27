const Cities = require('../models/Cities.model')
const CitiesController = {
    Add: async function (req, res) {
        try {
            const { name, ProvinceId } = req.body
            const data = await Cities.create({ name, ProvinceId })
            res.status(200).json({ message: "City added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding City" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await Cities.find()
            res.status(200).json({ message: "getting all Cities....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Cities" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Cities.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting City" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name, ProvinceId } = req.body
            const data = await Cities.findByIdAndUpdate(id, { name, ProvinceId }, { new: true })
            if (data) {
                res.status(200).json({ message: "City updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the City" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Cities.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "City deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the City" })

        }
    }
}
module.exports = CitiesController;