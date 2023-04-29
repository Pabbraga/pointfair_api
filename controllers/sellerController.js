import { Seller } from "../models/Seller.js";

const sellerController = {
    create: async(req, res) => {
        try {
            const seller = {
                nmVendedorCompleto: req.body.nmVendedorCompleto,
                nmVendedor: req.body.nmVendedor,
                email: req.body.email,
                telefone: req.body.telefone,
            }
            await Seller.create(seller);
            return res.status(201).json("Vendedor criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Seller.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Seller.findById(id);
            if(!data) {
                return res.status(404).json("Vendedor não encontrado.");
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
                nmVendedorCompleto: req.body.nmVendedorCompleto,
                nmVendedor: req.body.nmVendedor,
                email: req.body.email,
                telefone: req.body.telefone,
            };
            if(!data) {
                return res.status(404).json("Vendedor não encontrado.");
            }
            await Seller.findByIdAndUpdate(id, data);
            return res.status(200).json("Vendedor atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Seller.findById(id);
            if(!data) {
                return res.status(404).json("Vendedor não encontrado.");
            }
            await Seller.findByIdAndDelete(id);
            return res.status(200).json("Vendedor apagado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default sellerController; 