import bcrypt from 'bcrypt';
import { User } from "../models/User.js";

const userController = {
    create: async(req, res) => {
        try {
            const user = {
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                photo: req.body.photo,
                email: req.body.email,
                phone: req.body.phone,
                location: req.body.location,
                password: req.body.password,
                following: req.body.following
            }

            const email = user.email;
            const userExists = await User.findOne({ email: email})
            if(userExists) return res.status(422).json({msg:"Usuário já existe."});

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(user.password, salt);
            user.password = passwordHash;

            await User.create(user);
            return res.status(201).json({msg:"Usuário criado com sucesso."});
        } catch (err) {
            return res.json(err);
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await User.find().populate('following');
            return res.status(200).json(data);
        } catch (err) {
            return res.status(503).json({msg:"Serviço indisponível, tente mais tarde."});
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await User.findById(id);
            if(!data) {
                return res.status(404).json({msg:"Usuário não encontrado."});
            }
            return res.status(200).json(data);
        } catch (err) {
            return res.json(err);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const user = {
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                photo: req.body.photo,
                email: req.body.email,
                phone: req.body.phone,
                location: req.body.location,
                password: req.body.password,
                following: req.body.following
            }

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(user.password, salt);
            user.password = passwordHash;
            await User.findByIdAndUpdate(id, user);
            return res.status(200).json({msg:"Usuário atualizado com sucesso."});
        } catch (err) {
            return res.json(err);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const data = User.findById(id);
            if(!data) {
                return res.status(404).json({msg:"Usuário não encontrado."});
            }
            await User.findByIdAndDelete(id);
            return res.status(200).json({msg:"Usuário removido com sucesso."});
        } catch (err) {
            return res.json(err);
        }
    }
};

export default userController; 