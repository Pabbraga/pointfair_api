import bcrypt from 'bcrypt';
import { User } from "../models/User.js";

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cnpj.length !== 14) {
        return false; // CNPJ deve ter 14 dígitos
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    // Validação do primeiro dígito verificador
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(cnpj.charAt(i)) * weight;
        weight = (weight === 2) ? 9 : weight - 1;
    }

    let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (parseInt(cnpj.charAt(12)) !== digit) {
        return false;
    }

    // Validação do segundo dígito verificador
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
        sum += parseInt(cnpj.charAt(i)) * weight;
        weight = (weight === 2) ? 9 : weight - 1;
    }

    digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (parseInt(cnpj.charAt(13)) !== digit) {
        return false;
    }

    return true;
}
const userController = {
    create: async(req, res) => {
        try {
            const user = {
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                isSeller: req.body.isSeller,
                cnpj: req.body.cnpj,
                photoUrl: req.body.photoUrl,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                fair: req.body.fair,
                location: req.body.location
            }

            const isSeller = user.isSeller;
            const email = user.email;
            const cnpj = user.cnpj;

            if(!email) return res.status(422).json("Insira seu Email")

            const userExists = await User.findOne({email: email});
            if(userExists) return res.status(409).json("Usuário já existe");

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(user.password, salt);
            user.password = passwordHash;

            if(isSeller === true && !cnpj) return res.status(422).json("CNPJ inválido ou inexistente");
            if(cnpj && !validarCNPJ(cnpj)) return res.status(422).json( "CNPJ inválido" );
            if(cnpj) {
                const cnpjExists = await User.findOne({cnpj:cnpj});
                if(cnpjExists) return res.status(422).json("CNPJ já cadastrado.");
            }

            await User.create(user);
            return res.status(201).json("Usuário criado com sucesso");
        } catch (err) {
            return res.status(503).json("Serviço indisponível, tente mais tarde");
        }
    },
    getAll: async(_, res) => {
        try {
            const data = await User.find().populate('following').populate('location');
            return res.status(200).json(data);
        } catch (err) {
            return res.status(503).json({err});
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const data = await User.findById(id).populate('following').populate('fair');
            if(!data) {
                return res.status(404).json("Usuário não encontrado");
            }
            return res.status(200).json(data);
        } catch (err) {
            return res.status(503).json("Serviço indisponível, tente mais tarde.");
        }
    },
    search: async(req, res) => {
        try {
            const search = req.params.search;
            const data = await User.find({nickname: {$regex: `^${search}`, $options: 'im'}});
            if(!data) {
                return res.status(404).json("Nenhum usuário foi encontrado.")
            }
            return res.status(200).json(data);
        } catch (err) { 
            return res.status(404).json("Serviço indisponível, tente mais tarde.");
        }
    },
    updateProfile: async(req, res) => {
        try {
            const id = req.params.id;
            const user = {
                nickname: req.body.nickname,
                photoUrl: req.body.photoUrl,
                description: req.body.description,
            }
            const userExists = await User.findById(id).populate('following').populate('fair');
            if(!userExists) {
                return res.status(404).json("Nenhum usuário foi encontrado.")
            }
            if(!user.nickname) {
                return res.status(422).json("Preencha o campo de apelido de usuário.")
            }
            await User.findByIdAndUpdate(id, user);
            return res.status(201).json("Usuário atualizado com sucesso.");
        } catch (err) {
            return res.status(503).json("Serviço indisponível, tente mais tarde.");
        }
    },
    updateSchedules: async(req, res) => {
        try {
            const id = req.params.id;
            const userExists = await User.findById(id).populate('following').populate('fair');
            if(!userExists) {
                return res.status(404).json("Nenhum usuário foi encontrado.")
            }
            const daysOfWeek = {
                sunday: req.body.sunday,
                monday: req.body.monday,
                tuesday: req.body.tuesday,
                wednesday: req.body.wednesday,
                thursday: req.body.thursday,
                friday: req.body.friday,
                saturnday: req.body.saturnday
            }
            const data = {
                schedules: daysOfWeek
            };
            await User.findByIdAndUpdate(id, data);
            return res.status(201).json("Horário atualizado com sucesso.");
        } catch (err) {

        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const user = {
                fullName: req.body.fullName,
                nickname: req.body.nickname,
                photoUrl: req.body.photoUrl,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                fair: req.body.fair,
                location: [
                    req.body.city,
                    req.body.district
                ],
            }
            
            if(user.password) {
                const salt = await bcrypt.genSalt(12);
                const passwordHash = await bcrypt.hash(user.password, salt);
                user.password = passwordHash;
                return;
            }
            
            await User.findByIdAndUpdate(id, user);
            return res.status(201).json("Usuário atualizado com sucesso.");
        } catch (err) {
            return res.status(503).json("Serviço indisponível, tente mais tarde.");
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
            return res.status(201).json("Usuário removido com sucesso.");
        } catch (err) {
            return res.status(503).json("Serviço indisponível, tente mais tarde.");
        }
    }
};

export default userController;