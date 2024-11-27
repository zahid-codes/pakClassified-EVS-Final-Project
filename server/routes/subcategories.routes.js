const express = require('express');
const SubCategoriesController = require('../controllers/SubCategories.controller');
const isAuth = require('../middlewares/auth.middleware');

const SubCategoryRouter = express.Router()
SubCategoryRouter.use(isAuth)

SubCategoryRouter.route('/').post(SubCategoriesController.Add).get(SubCategoriesController.GetAll)
SubCategoryRouter.route('/:id').get(SubCategoriesController.GetOne).put(SubCategoriesController.Update).delete(SubCategoriesController.Delete)
module.exports = SubCategoryRouter;
