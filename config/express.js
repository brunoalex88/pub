var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path')

module.exports = function() {
    var app = express();

    app.set('port', 3000);
    
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());    
    app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);
    
    app.get('*', function(req, res) {
        res.redirect('/');
    });

    return app;
};