import { db } from "../db.js"

export const getFeiras = async(req, res) => {
    try {
        const feira = await modelFeira.findAll();
        return res.json(feira);
    } catch (error) {
        return console.error("Erro ao consultar lista de feiras", error);
    }
}

export const addFeira = async(req, res) => {
    try {
        const feira = await modelFeira.create (
            {
                nmFeira: req.body.nmFeira,
            }
        );
        return res.json(feira);
    } catch (error) {
        return console.error("Feira não pode ser cadastrado.")
    }
}

export const updateFeira = async(req, res) => {
    try {
        const feira = await modelFeira.finByPK(req.body.cdFeira);
        if(feira) {
            feira.nmFeira = req.body.nmFeira;
            await feira.save();
        }
        return res.json(feira);
    } catch(error) {
        return console.error(`Os dados de ${req.body.nmFeira} não foram atualizados.`, error);
    }
}

export const getFeira = async(req, res) => {
    try {
        const feira = await modelFeira.findByPk(req.body.cdFeira);
        return res.json(feira);
    } catch (error) {
        return console.error("Feira não encontrada.", error);
    }
}

export const deleteFeira = async(req, res) => {
    try {
        const feira = await modelFeira.findByPk(req.body.cdFeira);
        await feira.destroy();
        return res.json(feira);
    } catch (error) {
        return console.error("Registros de feira não foram deletados.", error);
    }
}