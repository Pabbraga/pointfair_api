const Feira = require('../models/feira');
const Vendedor = require('../models/vendedor');

module.exports =
{
    async List(req, res){
        Vendedor.findAll({
    include: [
        {
            model: Feira,
            attributes: ['nmFeira']
        }
    ]
}).then((vendedores) => {
    res.send(vendedores);
}).catch((error) => {
    console.log(error);
    res.status(500).send({message: 'Erro ao buscar endereços'});
});
}}