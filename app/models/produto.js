var mongoose = require('mongoose');

module.exports = function () {

    var schema = mongoose.Schema({
        descricao: {
            type: String,
            required: true
        },
        estoque: {
            type: Number,
            required: true
        },
        valor: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('Produto', schema);

};