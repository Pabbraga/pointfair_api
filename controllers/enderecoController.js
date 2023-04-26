import { db } from "../db.js"

export const getEnderecos = async(req, res) => {
    try {
        const endereco = await modelEndereco.findAll();
        return res.json(endereco);
    } catch(error) {
        return console.error("Erro ao consultar lista de endereço", error);
    }
}
export const addEndereco = async(req, res) => {
    try {
        const endereco = await modelEndereco.create(
            {
                nmCidade: req.body.nmCidade,
                nmBairro: req.body.nmBairro,
                nmRua: req.body.nmRua,
                data_registro: req.body.data_registro
            }
        );
    return res.json(endereco);
    }  catch (error) {
        return console.error("Endereço da feira não pode ser cadastrado.", error);
    }
}

export const updateEndereco = async(req, res) => {
    try {
        const endereco = await modelEndereco.findByPk(req.body.cdEndereco);

        if(endereco) {
            endereco.nmCidade =  req.body.nmCidade;
            endereco.nmBairro = req.body.nmBairro;
            endereco.nmRua = req.body.nmRua;
            
            await endereco.save()
        }
        return res.json(endereco);
    } catch (error) {
        return console.error("Os dados do endereço não foram atualizados.", error);
    }
}

export const getEndereco = async(req, res) => {
    try {
        const endereco = await modelEndereco.findByPk(req.body.cdEndereco);
        return res.json(endereco);
    } catch (error) {
        return console.error("Endereço não encontrado.", error);
    }
}

export const deleteEndereco = async(req, res) => {
    try {
        const endereco = await modelEndereco.findByPk(req.body.cdEndereco);
        await endereco.destroy();
        return res.json(endereco);
    } catch (error) {
        return console.error("Registros do endereços não foram deletados.", error);
    }
}