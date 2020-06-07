let router = require('express').Router();

var userController = require('./Controllers/userController');
router.route('/users').get(userController.list);
router.route('/user/:user_id').get(userController.get);

var projectController = require('./Controllers/projectController');
router.route('/projects').get(projectController.list);
router.route('/project/:project_id').get(projectController.get);
router.route('/projectsByUser/:user_id').get(projectController.getByUser);

module.exports = router;