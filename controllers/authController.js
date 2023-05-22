import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User.js';
dotenv.config();

const authController = {
    login: async(req, res) => {
        try {
            const { email, password } = req.body; 
            if(!email) {
                return res.status(422).json({msg:{email:"Preencha o campo de email."}});
            }
            if(!password) {
                return res.status(422).json({msg:{password:"Preencha o campo de senha."}});
            }

            const user = await User.findOne({ email: email})
            if(!user) return res.status(404).json({msg:{email:"Usuário não encontrado."}});

            const checkPassword = await bcrypt.compare(password, user.password);
            if(!checkPassword) {
                return res.status(422).json({msg:{password:"Senha incorreta e/ou inválida."}});
            }
            
            try {
                const secret = process.env.SECRET;
                const token = jwt.sign(
                    {
                        id: user._id,
                    }, 
                    secret,
                );
                return res.status(200).json({token, user, msg:""});
            } catch (err) {
                return res.json(err);
            }
        } catch (err) {
            return res.json(err);
        }
    } 
};

export default authController;