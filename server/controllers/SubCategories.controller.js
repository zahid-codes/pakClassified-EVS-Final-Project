const SubCategory = require("../models/subcategory.model");

const SubCategoryController = {
  Add: async function (req, res) {
    try {
      const { name, description, image, category } = req.body
      const data = await SubCategory.create({ name, description, image, category })
      res.status(200).json({ message: "Sub Category added successfully", data: data })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "error while adding Sub Category" })
    }
  },
  GetAll: async function (req, res) {
    try {
      data = await SubCategory.find()
      res.status(200).json({ message: "getting all Sub Categories....", data: data })
    } catch (error) {
      res.status(500).json({ message: "error while getting all Sub Categories" })
    }
  },
  GetOne: async function (req, res) {
    try {
      const id = req.params.id
      const data = await SubCategory.findById(id)
      if (data) {
        return res.status(200).json(data)
      }
    } catch (error) {
      res.status(500).json({ message: "error while getting Sub Category" })
    }
  },
  Update: async function (req, res) {
    try {
      const id = req.params.id
      const { name, description, image, category } = req.body
      const data = await SubCategory.findByIdAndUpdate(id, { name, description, image, category }, { new: true })
      if (data) {
        res.status(200).json({ message: "Sub Category updated successfully", data: data })
      }
    } catch (error) {
      res.status(500).json({ message: "error while updating the Sub Category" })
    }
  },
  Delete: async function (req, res) {
    try {
      const id = req.params.id
      const data = await SubCategory.findByIdAndDelete(id)
      if (data) {
        res.status(200).json({ message: "Sub Category deletion successfull", data: data })
      }
    } catch (error) {
      res.status(500).json({ message: "error while deleting the Sub Category" })

    }
  }
}
module.exports = SubCategoryController;