import { Publication } from "../models/Publication.js";

const publicationController = {
    create: async(req, res) => {
        try {
            const data = {
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                inStock: req.body.inStock,
                owner: req.body.owner,
                location: req.body.location
            }
            await Publication.create(data);
            return res.status(201).json({msg:"Publicação criado com sucesso."});
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Publication.find().populate({
                path: 'owner',
                select: '-cnpj -fullName -password -phone -location -fair'
            }).sort({createdAt: 'desc'});
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Publication.findById(id);
            if(!data) {
                return res.status(404).json("Publicação não encontrado.");
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
                descricao: req.body.descricao,
                image: req.body.image,
                inStock: req.body.inStock,
                location: req.body.location
            }
            if(!data) {
                return res.status(404).json("Publicação não encontrado.");
            }
            await Publication.findByIdAndUpdate(id, data);
            return res.status(200).json("Produto atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = Publication.findById(id);
            if(!data) {
                return res.status(404).json("Produto não encontrado.");
            }
            await Publication.findByIdAndDelete(id);
            return res.status(200).json("Produto apagado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default publicationController;