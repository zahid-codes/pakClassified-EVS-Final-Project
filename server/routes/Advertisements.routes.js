const express = require('express');
const AdvertisementsController = require('../controllers/Advertisements.controller');
const isAuth = require('../middlewares/auth.middleware');
const uploadFiles = require('../middlewares/multer.middleware');

const AdvertisementsRouter = express.Router()
// AdvertisementsRouter.use(isAuth)

AdvertisementsRouter.route('/').post(isAuth, uploadFiles, AdvertisementsController.Add).get(AdvertisementsController.GetAll)
AdvertisementsRouter.route('/:id').get(AdvertisementsController.GetOne).put(isAuth, uploadFiles, AdvertisementsController.Update).delete(isAuth, AdvertisementsController.Delete)
module.exports = AdvertisementsRouter;
