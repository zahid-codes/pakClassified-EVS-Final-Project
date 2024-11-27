const jwt = require('jsonwebtoken')
const User = require('../models/Users.model')

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.token
        console.log("reached auth" + token);

        if (!token) return res.status(400).json("please login")
        const decoded_data = jwt.verify(token, process.env.SECRET_KEY)
        if (!decoded_data) return res.status(400).json("invalid token")
        req.user = await User.findById(decoded_data._id)
        console.log(`hello ${req.user.name}`);


        next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = isAuth