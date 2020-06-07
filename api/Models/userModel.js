var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    system_id: {
        type: Number,
        required: true
    },    
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    user_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
});

var User = module.exports = mongoose.model('users', userSchema);
module.exports.get = function(callback, limit) {
    User.find(callback).limit(limit);
}