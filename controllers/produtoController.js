const modelProduto = require('../models/produto');
module.exports =
{
    async List(req, res)
    {
        try {
            const produto = await modelProduto.findAll();
            return res.json(produto);
        } catch (error) {
            return console.error("Erro ao consultar lista de produtos.", error);
        }
    },

    async Add(req, res) 
    {
        try {
            const produto = await modelProduto.create(
                {
                    nmProduto: req.body.nmProduto,
                    descricao: req.body.descricao,
                }
            );
            return res.json(produto);
        } catch (error) {
            return console.error("Produto não pode ser cadastrado.", error);
        }
    },

    async Update(req, res) 
    {
        try {
            const produto = await modelProduto.findByPk(req.body.cdProduto);
            if(produto) {
                produto.nmProduto = req.body.nmProduto;
                produto.descricao = req.body.descricao;

                await usuario.save();
            }
            return res.json(produto);
        } catch (error) {
            return console.error(`Os dados de ${req.body.nome} não foram atualizados.`, error);
        }
    },

    async ListOne(req, res) 
    {
        try {
            const produto = await modelProduto.findByPk(req.body.cdProduto);
            return res.json(produto);
        } catch (error) {
            return console.error("Usuário não encontrado.", error);
        }
    },

    async Delete(req, res)
    {
        try {
            const produto = await modelProduto.findByPk(req.body.cdProduto);
            await produto.destroy();
            return res.json(produto);
        } catch (error) {
            return console.error("Registros do usuário não foram deletados.", error);
        }
    }
}
