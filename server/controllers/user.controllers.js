const jwt = require('jsonwebtoken')
const User = require('../models/Users.model')
const bcrypt = require('bcrypt')
const UserController = {
    AddUser: async function (req, res) {
        try {
            const { name, email, password, birthDate, contactNumber, RoleID } = req.body
            const image = req.file ? `uploads/${req.file.filename}` : null
            const duplicate_mail_check = await User.findOne({ email })
            if (duplicate_mail_check) {
                return res.status(400).json({ message: "Email already exists!" })
            }
            const duplicate_number_check = await User.findOne({ contactNumber })
            if (duplicate_number_check) {
                return res.status(400).json({ num_message: "Contact Number already exists!" })
            }
            const hashPassword = await bcrypt.hash(password, 10)
            const data = await User.create({ name, email, password: hashPassword, birthDate, contactNumber, image, RoleID })
            res.status(200).json({ message: "User added successfully", data: data })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: "error while adding user" })
        }
    },
    GetAllUsers: async function (req, res) {
        try {
            data = await User.find().populate("RoleID")
            res.status(200).json({ message: "getting all users....", data: data })
        } catch (error) {
            res.status(500).json({ message: "error while getting all users" })
        }
    },
    GetUser: async function (req, res) {
        try {
            // console.log("running get user");

            const id = req.params.id
            // console.log(id);

            const data = await User.findById(id).populate('RoleID')
            // console.log(data);

            if (data) {
                console.log("one")
                return res.status(200).json(data)
            }
        } catch (error) {
            res.status(500).json({ message: "error while getting the user" })
        }
    },
    UpdateUser: async function (req, res) {
        try {
            const id = req.params.id
            const { name, email, apiKey, loginId, password, securityQuestion, securityAnswer, birthDate, contactNumber, image, RoleID } = req.body
            const data = await User.findByIdAndUpdate(id, { name, email, apiKey, loginId, password, securityQuestion, securityAnswer, birthDate, contactNumber, image, RoleID }, { new: true })
            if (data) {
                res.status(200).json({ message: "data updated successfully", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while updating the user" })
        }
    },
    DeleteUser: async function (req, res) {
        try {
            const id = req.params.id
            const data = await User.findByIdAndDelete(id)
            if (data) {
                res.status(200).json({ message: "user deletion successfull", data: data })
            }
        } catch (error) {
            res.status(500).json({ message: "error while deleting the user" })

        }
    },
    Login: async function (req, res) {
        try {
            const { email, password } = req.body
            const data = await User.findOne({ email })
            if (!data) {
                return res.status(400).json({ message: "user does not exists or wrong email" })
            }
            const comp_pass = await bcrypt.compare(password, data.password)
            if (!comp_pass) {

                return res.status(400).json({ message: "incorrect email or password" })
            }
            const token = jwt.sign({ _id: data._id }, process.env.SECRET_KEY, { expiresIn: "1h" })

            res.status(200).json({
                message: `Welcome back ${data.name}`,
                token,
                data
            })

        } catch (error) {
            res.status(500).json({ message: "wrong email or password" })

        }
    },
    verifyUser: async function (req, res) {
        try {
            const token = req.headers.token
            console.log(token);

            if (!token) return res.status(400).json("please login")
            const decoded_data = jwt.verify(token, process.env.SECRET_KEY)
            if (!decoded_data) return res.status(400).json("invalid token")
            const user = await User.findById(decoded_data._id)
            console.log(`hello ${user.name}`);
            res.status(200).json({
                "user": user
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}
module.exports = UserController;