const Endereco = require('../models/endereco');
const Feira = require('../models/feira');

export const getEnderecosFeiras = async(req, res) => {
        Endereco.findAll({
    include: [
        {
            model: Feira,
            attributes: ['nmFeira']
        }
    ]
}).then((enderecos) => {
    res.send(enderecos);
}).catch((error) => {
    console.log(error);
    res.status(500).send({message: 'Erro ao buscar endereços'});
});
}

/*
exports.EnderecoFeira = (req, res) => {
  Endereco.findAll({
    include: [
      {
        model: Feira,
        attributes: ['nmFeira']
      }
    ]
  }).then((enderecos) => {
    res.send(enderecos);
  }).catch((error) => {
    console.log(error);
    res.status(500).send({message: 'Erro ao buscar endereços'});
  });
};
*/