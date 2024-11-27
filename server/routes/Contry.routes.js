const express = require('express');
const ContriesController = require('../controllers/Contries.controller');
const isAuth = require('../middlewares/auth.middleware');

const ContriesRouter = express.Router()
ContriesRouter.use(isAuth)

ContriesRouter.route('/').post(ContriesController.Add).get(ContriesController.GetAll)
ContriesRouter.route('/:id').get(ContriesController.GetOne).put(ContriesController.Update).delete(ContriesController.Delete)
module.exports = ContriesRouter;
