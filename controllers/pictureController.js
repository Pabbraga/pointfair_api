import { Picture } from "../models/Picture.js";

const pictureController = {
    create: async(req, res) => {
        try {
            const picture = {
                name: req.body.name,
                src: req.body.src,
            }
            await Picture.create(picture);
            return res.status(201).json("Imagem criada com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Picture.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Picture.findById(id);
            if(!data) {
                return res.status(404).json("Imagem não encontrada.");
            }
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = Picture.findById(id);
            if(!data) {
                return res.status(404).json("Image não encontrada.");
            }
            await Picture.findByIdAndDelete(id);
            return res.status(200).json("Imagem apagada com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default pictureController;