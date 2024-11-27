const express = require('express');
const ProvincesController = require('../controllers/Provinces.controller');
const isAuth = require('../middlewares/auth.middleware');

const ProvincesRouter = express.Router()
ProvincesRouter.use(isAuth)
ProvincesRouter.route('/').post(ProvincesController.Add).get(ProvincesController.GetAll)
ProvincesRouter.route('/:id').get(ProvincesController.GetOne).put(ProvincesController.Update).delete(ProvincesController.Delete)
module.exports = ProvincesRouter;
