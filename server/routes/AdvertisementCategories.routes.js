const express = require('express');
const AdvertisementCategoriesController = require('../controllers/AdvertisementCategories.controller');
const isAuth = require('../middlewares/auth.middleware');

const AdvertisementCategoriesRouter = express.Router()
// AdvertisementCategoriesRouter.use(isAuth)

AdvertisementCategoriesRouter.route('/').post(isAuth, AdvertisementCategoriesController.Add).get(AdvertisementCategoriesController.GetAll)
AdvertisementCategoriesRouter.route('/:id').get(AdvertisementCategoriesController.GetOne).put(isAuth, AdvertisementCategoriesController.Update).delete(isAuth, AdvertisementCategoriesController.Delete)
module.exports = AdvertisementCategoriesRouter;
