const express = require('express');
const AdvertisementTypesController = require('../controllers/AdvertisementTypes.controller');
const isAuth = require('../middlewares/auth.middleware');

const AdvertisementTypesRouter = express.Router()
AdvertisementTypesRouter.use(isAuth)

AdvertisementTypesRouter.route('/').post(AdvertisementTypesController.Add).get(AdvertisementTypesController.GetAll)
AdvertisementTypesRouter.route('/:id').get(AdvertisementTypesController.GetOne).put(AdvertisementTypesController.Update).delete(AdvertisementTypesController.Delete)
module.exports = AdvertisementTypesRouter;
