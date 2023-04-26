import { db } from "../db.js"

export const getProdutos = async(req, res) => {        
    try {
        const produto = await modelProduto.findAll();
        return res.json(produto);
    } catch (error) {
        return console.error("Erro ao consultar lista de produtos.", error);
    }
}

export const addProduto = async(req, res) => {
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
}

export const updateProduto = async(req, res) => {
    try {
        const produto = await modelProduto.findByPk(req.body.cdProduto);
        if(produto) {
            produto.nmProduto = req.body.nmProduto;
            produto.descricao = req.body.descricao;

            await usuario.save();
        }
        return res.json(produto);
    } catch (error) {
        return console.error(`Os dados de ${req.body.nmProduto} não foram atualizados.`, error);
    }
}

export const getProduto = async(req, res) => {
    try {
        const produto = await modelProduto.findByPk(req.body.cdProduto);
        return res.json(produto);
    } catch (error) {
        return console.error("Produto não encontrado.", error);
    }
}

export const deleteProduto = async(req, res) => {
    try {
        const produto = await modelProduto.findByPk(req.body.cdProduto);
        await produto.destroy();
        return res.json(produto);
    } catch (error) {
        return console.error("Registros do produto não foram deletados.", error);
    }
}