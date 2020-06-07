Project = require('../Models/projectModel');
User = require('../Models/userModel');

exports.list = function(req, res) {
    Project.find().then(projects => {
        res.json({
            status: "OK",
            code: "200",
            data: projects
        });
    }).catch(err => {
        handleError(err);
      })
};

exports.get = function (req, res) {
    Project.find({system_id: req.params.project_id}).then(project => {
        res.json({
            status: "OK",
            code: "200",
            data: project
        });
    }).catch(err => {
        handleError(err);
    })
};

exports.getByUser = function(req, res) {
    User.findOne({system_id: req.params.user_id}, '_id').then(user_object => {
        Project.find({owner: user_object}).then(projects => {
            res.json({
                status: "OK",
                code: "200",
                data: projects
            });
        }).catch(err => {
            handleError(err);
        })
    })
}