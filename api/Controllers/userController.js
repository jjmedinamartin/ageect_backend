User = require('../Models/userModel');
exports.list = function(req, res) {
    User.find().then(users => {
        res.json({
            status: "OK",
            code: "200",
            data: users
        });
    }).catch(err => {
        handleError(err);
    })
};
exports.get = function (req, res) {
    var user_id = req.params.user_id;
    console.log(typeof user_id);
    User.find({system_id: user_id}).then(user => {
        res.json({
            status: "OK",
            code: "200",
            data: user
        });
    }).catch(err => {
        handleError(err);
    })
};