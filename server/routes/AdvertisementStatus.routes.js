const express = require('express');
const AdvertisementStatusController = require('../controllers/AdvertisementStatus.controller');
const isAuth = require('../middlewares/auth.middleware');

const AdvertisementStatusRouter = express.Router()
AdvertisementStatusRouter.use(isAuth)

AdvertisementStatusRouter.route('/').post(AdvertisementStatusController.Add).get(AdvertisementStatusController.GetAll)
AdvertisementStatusRouter.route('/:id').get(AdvertisementStatusController.GetOne).put(AdvertisementStatusController.Update).delete(AdvertisementStatusController.Delete)
module.exports = AdvertisementStatusRouter;
