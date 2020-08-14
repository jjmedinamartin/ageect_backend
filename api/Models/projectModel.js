var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var projectSchema = mongoose.Schema({
    system_id: {
        type: Number,
        required: true
    },    
    name: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    complexity: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
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

var Project = module.exports = mongoose.model('projects', projectSchema);
module.exports.get = function(callback, limit) {
    Project.find(callback).limit(limit);
}