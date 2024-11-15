import { Fair } from "../models/Fair.js";

const fairController = {
    create: async(req, res) => {
        try {
            const fair = {
                name: req.body.name,
                description: req.body.description,
                location: req.body.location
            }
            await Fair.create(fair);
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
            const fairExists = await Fair.findById(id);
            if(!fairExists) {
                return res.status(404).json("Feira não encontrado.");
            }
            return res.status(201).json(data);
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
            const fairExists = await Fair.findById(id);
            if(!fairExists) {
                return res.status(404).json("Feira não encontrado.");
            }
            await Fair.findByIdAndUpdate(id, data);
            return res.status(201).json("Feira atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const fairExists = await Fair.findById(id);
            if(!fairExists) {
                return res.status(404).json("Feira não encontrado.");
            }
            await Fair.findByIdAndDelete(id);
            return res.status(200).json("Feira apagada com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default fairController