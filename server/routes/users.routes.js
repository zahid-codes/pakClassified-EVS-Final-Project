const express = require('express');
const UserController = require('../controllers/user.controllers');
const isAuth = require('../middlewares/auth.middleware');
const uploadFiles = require('../middlewares/multer.middleware');

const UserRouter = express.Router()
UserRouter.route('/verifytoken').get(UserController.verifyUser)
UserRouter.route('/').post(uploadFiles, UserController.AddUser).get(isAuth, UserController.GetAllUsers)
UserRouter.route('/:id').get(isAuth, UserController.GetUser).put(isAuth, UserController.UpdateUser).delete(isAuth, UserController.DeleteUser)
UserRouter.route('/login').post(UserController.Login)


module.exports = UserRouter;