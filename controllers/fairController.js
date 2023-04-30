import { Fair } from "../models/Fair.js";

const fairController = {
    create: async(req, res) => {
        try {
            const fair = {
                nmFeira: req.body.nmFeira,
            }
            await User.create(fair);
            return res.status(201).json("Feira criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Fair.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Fair.findById(id);
            if(!data) {
                return res.status(404).json("Feira não encontrado.");
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
                nmFeira: req.body.nmFeira,
            }
            if(!data) {
                return res.status(404).json("Feira não encontrado.");
            }
            await User.findByIdAndUpdate(id, data);
            return res.status(200).json("Feira atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = User.findById(id);
            if(!data) {
                return res.status(404).json("Feira não encontrado.");
            }
            await Feira.findByIdAndDelete(id);
            return res.status(200).json("Feira não encontrado.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default fairController