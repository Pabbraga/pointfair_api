const Produto = require('../models/produto');
const Vendedor = require('../models/vendedor');

module.exports =
{
    async List(req, res){
        Produto.findAll({
    include: [
        {
            model: Vendedor,
            attributes: ['nmVendedorCompleto']
        }
    ]
}).then((produtos) => {
    res.send(produtos);
}).catch((error) => {
    console.log(error);
    res.status(500).send({message: 'Erro ao buscar Produtos do vendedor'});
});
}}