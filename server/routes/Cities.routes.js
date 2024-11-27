const express = require('express');
const CitiesController = require('../controllers/Cities.controller');
const isAuth = require('../middlewares/auth.middleware');
const CitiesRouter = express.Router()
CitiesRouter.use(isAuth)
CitiesRouter.route('/').post(CitiesController.Add).get(CitiesController.GetAll)
CitiesRouter.route('/:id').get(CitiesController.GetOne).put(CitiesController.Update).delete(CitiesController.Delete)
module.exports = CitiesRouter;
