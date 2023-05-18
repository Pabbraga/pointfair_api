import { Seller } from "../models/Seller.js";

const sellerController = {
    create: async(req, res) => {
        try {
            const seller = {
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                photo: req.body.photo,
                email: req.body.email,
                phone: req.body.phone,
                cnpj: req.body.cnpj,
                location: req.body.location,
                password: req.body.password,
                following: req.body.following
            }
            await Seller.create(seller);
            return res.status(201).json("Vendedor criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Seller.find().populate('location');
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
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                photo: req.body.photo,
                email: req.body.email,
                phone: req.body.telefone,
                cnpj: req.body.cnpj,
                location: req.body.localidade,
                password: req.body.senha,
                following: req.body.following
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