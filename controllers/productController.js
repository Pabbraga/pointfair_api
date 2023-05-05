import { Product } from "../models/Product.js";

const productController = {
    create: async(req, res) => {
        try {
            const product = {
                nmProduct: req.body.nmProduto,
                descricao: req.body.descricao,
                image: req.body.image,
                inStock: req.body.inStock
            }
            await Product.create(product);
            return res.status(201).json("produto criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await Product.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await Product.findById(id);
            if(!data) {
                return res.status(404).json("Produto não encontrado.");
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
                nmProduct: req.body.nmProduto,
                descricao: req.body.descricao,
                image: req.body.image,
                inStock: req.body.inStock
            }
            if(!data) {
                return res.status(404).json("Produto não encontrado.");
            }
            await Product.findByIdAndUpdate(id, data);
            return res.status(200).json("Produto atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = Product.findById(id);
            if(!data) {
                return res.status(404).json("Produto não encontrado.");
            }
            await Product.findByIdAndDelete(id);
            return res.status(200).json("Produto apagado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default productController;