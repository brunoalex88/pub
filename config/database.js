var mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri);
    mongoose.set('debug', true);

    mongoose.connection.on('connected', function() {
        mongoose.Promise = global.Promise;
        console.log('Mongoose connected');
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose disconnected');
    });

    mongoose.connection.on('error', function(erro) {
        console.error('Error when connecting Mongoose: ' + erro);
    });

    process.on('SIGNINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose disconnected by application end');
            process.exit(0);
        });
    });    

};