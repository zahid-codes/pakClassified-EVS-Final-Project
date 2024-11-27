const CityAreas = require('../models/CityAreas.model')
const CityAreasController = {
    Add: async function (req, res) {
        try {
            const { name, CityId } = req.body
            const data = await CityAreas.create({ name, CityId })
            res.status(200).json({ message: "City Area added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding City Area" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await CityAreas.find()
            res.status(200).json({ message: "getting all City Areas....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all City Areas" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await CityAreas.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting City Area" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name, CityId } = req.body
            const data = await CityAreas.findByIdAndUpdate(id, { name, CityId }, { new: true })
            if (data) {
                res.status(200).json({ message: "City Area updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the City Area" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await CityAreas.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "City Area deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the City Area" })

        }
    }
}
module.exports = CityAreasController;