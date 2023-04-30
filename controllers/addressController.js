import { Address } from "../models/Address.js"

const addressController = {
    create: async(req, res) => {
        try {
            const address = {
                nmCidade: req.body.nmCidade,
                nmBairro: req.body.nmBairro,
                nmRua: req.body.nmRua,
            }
            await Address.create(address);
            return res.status(201).json("Endereço criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Address.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Address.findById(id);
            if(!data) {
                return res.status(404).json("Endereço não encontrado.");
            }
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const data = {
                nmCidade: req.body.nmCidade,
                nmBairro: req.body.nmBairro,
                nmRua: req.body.nmRua,
            };
            if(!data) {
                return res.status(404).json("Endereço não encontrado.");
            }
            await Address.findByIdAndUpdate(id, data);
            return res.status(200).json("Endereço atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Address.findById(id);
            if(!data) {
                return res.status(404).json("Endereço não encontrado.");
            }
            await Address.findByIdAndDelete(id);
            return res.status(200).json("Endereço apagado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default addressController;