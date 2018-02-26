module.exports = function(app) {
    var controller = {};
    var Produto = app.models.produto;
/*     var produtos = [
        {_id: 1, descricao: 'Cerveja Skol',
        estoque: 1, valor: 10},
        {_id: 2, descricao: 'Cerveja Brahma',
        estoque: 1, valor: 20},
        {_id: 3, descricao: 'Cerveja Heineken',
        estoque: 1, valor: 30},        
        ]; */

    controller.listarProdutos = function(req, res) {
        Produto.find(function(err, produtos) {
            if (err) return console.error(err);
            res.json(produtos);
        });

    };

    return controller;

};