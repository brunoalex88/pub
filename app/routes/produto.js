module.exports = function(app) {

    var controller = app.controllers.produto;

    app.get('/produtos', controller.listarProdutos);

};