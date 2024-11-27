const Roles = require('../models/Roles.model')
const RoleController = {
    Add: async function (req, res) {
        try {
            const { name } = req.body
            const data = await Roles.create({ name })
            res.status(200).json({ message: "Roles added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding Roles" })
        }
    },
    GetAll: async function (req, res) {
        try {
            data = await Roles.find()
            res.status(200).json({ message: "getting all Roles....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all Roles" })
        }
    },
    GetOne: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Roles.findById(id)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting Role" })
        }
    },
    Update: async function (req, res) {
        try {
            const id = req.params.id
            const { name } = req.body
            const data = await Roles.findByIdAndUpdate(id, { name }, { new: true })
            if (data) {
                res.status(200).json({ message: "Role updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the Role" })
        }
    },
    Delete: async function (req, res) {
        try {
            const id = req.params.id
            const data = await Roles.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "Role deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the Role" })

        }
    }
}
module.exports = RoleController;