User = require('../Models/userModel');

exports.list = function(req, res) {
    User.find().then(users => {
        res.json({
            data: users
        });
    }).catch(err => {
        handleError(err);
    })
};

exports.get = function (req, res) {
    User.find({system_id: req.params.user_id}).then(user => {
        res.json({
            data: user
        });
    }).catch(err => {
        handleError(err);
    })
};