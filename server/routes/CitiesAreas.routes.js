const express = require('express');
const CityAreasController = require('../controllers/CityAreas.controller');
const isAuth = require('../middlewares/auth.middleware');

const CityAreasRouter = express.Router()
CityAreasRouter.use(isAuth)

CityAreasRouter.route('/').post(CityAreasController.Add).get(CityAreasController.GetAll)
CityAreasRouter.route('/:id').get(CityAreasController.GetOne).put(CityAreasController.Update).delete(CityAreasController.Delete)
module.exports = CityAreasRouter;
