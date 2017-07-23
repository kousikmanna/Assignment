var mongoose = require('mongoose');

module.exports = mongoose.model('make', {
    makeName: {type: String},
    models:{type: Array}
}, 'make');