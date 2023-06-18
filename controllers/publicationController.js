import { Publication } from "../models/Publication.js";

const publicationController = {
    create: async(req, res) => {
        try {
            const data = {
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                inStock: req.body.inStock,
                quantity: req.body.quantity,
                owner: req.body.owner,
                location: req.body.location
            }
            await Publication.create(data);
            if(!data.imageUrl) {
                return res.status(403).json("Imagem não encontrada")
            }
            if(!data) {
                return res.status(503).json("Ocorreu um erro inesperado")
            }
            return res.status(201).json("Publicação criado com sucesso");
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
            
            if(!data) {
                return res.status(503).json("Ocorreu um erro inesperado")
            }

            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Publication.findById(id);

            const publicationExists = await Publication.findById(id);
            if(!publicationExists) {
                return res.status(404).json("Publicação não encontrada");
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
                quantity: req.body.quantity,
                location: req.body.location
            }

            const publicationExists = await Publication.findById(id);
            if(!publicationExists) {
                return res.status(404).json("Publicação não encontrada");
            }

            await Publication.findByIdAndUpdate(id, data);
            return res.status(200).json("Produto atualizado com sucesso");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const publicationExists = await Publication.findById(id);
            if(!publicationExists) {
                return res.status(404).json("Publicação não encontrada");
            }

            await Publication.findByIdAndDelete(id);
            return res.status(200).json("Publicação apagada com sucesso");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default publicationController;