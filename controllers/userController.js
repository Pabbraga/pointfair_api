import { User } from "../models/User.js";

const userController = {
    create: async(req, res) => {
        try {
            const user = {
                nmUsuarioCompleto: req.body.nmUsuarioCompleto,
                nmUsuario: req.body.nmUsuario,
                email: req.body.email,
                telefone: req.body.telefone,
                following: req.body.following
            }
            await User.create(user);
            return res.status(201).json("Usuário criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await User.find();
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await User.findById(id);
            if(!data) {
                return res.status(404).json("Usuário não encontrado.");
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
                nmUsuarioCompleto: req.body.nmUsuarioCompleto,
                nmUsuario: req.body.nmUsuario,
                email: req.body.email,
                telefone: req.body.telefone,
                following: req.body.following
            }
            if(!data) {
                return res.status(404).json("Usuário não encontrado.");
            }
            await User.findByIdAndUpdate(id, data);
            return res.status(200).json("Usuário atualizado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = User.findById(id);
            if(!data) {
                return res.status(404).json("Usuário não encontrado.");
            }
            await User.findByIdAndDelete(id);
            return res.status(200).json("Usuário não encontrado.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default userController; 