import bcrypt from 'bcrypt';
import { User } from "../models/User.js";

const userController = {
    create: async(req, res) => {
        try {
            const user = {
                nmUserFull: req.body.nmUserFull,
                nmUser: req.body.nmUser,
                photo: req.body.photo,
                email: req.body.email,
                phone: req.body.telefone,
                location: req.body.location,
                password: req.body.password,
                following: req.body.following
            }

            const email = user.email;
            const userExists = await User.findOne({ email: email})
            if(userExists) return res.status(422).json("Usuário já existe.");

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(user.password, salt);
            user.password = passwordHash;

            await User.create(user);
            return res.status(201).json("Usuário criado com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await User.find().populate('following');
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
                nmUsuarioCompleto: req.body.nmUserFull,
                nmUsuario: req.body.nmUser,
                photo: req.body.photo,
                email: req.body.email,
                phone: req.body.phone,
                location: req.body.location,
                password: req.body.password,
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
            return res.status(200).json("Usuário removido com sucesso.");
        } catch (err) {
            return res.json(err);
        }
    }
};

export default userController; 