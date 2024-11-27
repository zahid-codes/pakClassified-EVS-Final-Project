const express = require('express');
const RolesController = require('../controllers/Roles.controller');
const isAuth = require('../middlewares/auth.middleware');

const RolesRouter = express.Router()
RolesRouter.use(isAuth)

RolesRouter.route('/').post(RolesController.Add).get(RolesController.GetAll)
RolesRouter.route('/:id').get(RolesController.GetOne).put(RolesController.Update).delete(RolesController.Delete)
module.exports = RolesRouter;
