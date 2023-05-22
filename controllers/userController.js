import bcrypt from 'bcrypt';
import { User } from "../models/User.js";

const userController = {
    create: async(req, res) => {
        try {
            const user = {
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                isSeller: req.body.isSeller,
                cnpj: req.body.cnpj,
                photo: req.body.photo,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                location: req.body.location,
                following: req.body.following
            }

            const isSeller = user.isSeller;
            const email = user.email;
            const cnpj = user.cnpj;

            const userExists = await User.findOne({ email: email});
            if(userExists) return res.status(422).json({msg:{email:"Usuário já existe."}});

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(user.password, salt);
            user.password = passwordHash;

            if(isSeller === true && !cnpj) return res.status(422).json({msg:{cnpj:"CNPJ inválido ou inexistente"}});
            if(cnpj) {
                const cnpjExists = await User.findOne({ cnpj: cnpj })
                if(cnpjExists) return res.status(422).json({msg:{cnpj:"CNPJ já cadastrado."}});
            }

            await User.create(user);
            return res.status(201).json({msg:"Usuário criado com sucesso."});
        } catch (err) {
            return res.status(503).json({msg:"Serviço indisponível, tente mais tarde."});
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await User.find().populate('following').populate('location');
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
            return res.status(503).json({msg:"Serviço indisponível, tente mais tarde."});
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
                password: req.body.password,
                phone: req.body.phone,
                location: req.body.location,
                following: req.body.following
            }
            
            if(user.password) {
                const salt = await bcrypt.genSalt(12);
                const passwordHash = await bcrypt.hash(user.password, salt);
                user.password = passwordHash;
                return;
            }
            
            await User.findByIdAndUpdate(id, user);
            return res.status(200).json({msg:"Usuário atualizado com sucesso."});
        } catch (err) {
            return res.status(503).json({msg:"Serviço indisponível, tente mais tarde."});
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
            return res.status(503).json({msg:"Serviço indisponível, tente mais tarde."});
        }
    }
};

export default userController; 