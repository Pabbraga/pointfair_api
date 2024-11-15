import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User.js';
dotenv.config();

const authController = {
    login: async(req, res) => {
        try {
            const { email, password, signed } = req.body;
            
            if(signed) {
                const user = await User.findOne({ email: email});
                const secret = process.env.SECRET;
                const token = jwt.sign(
                    {
                        id: user._id,
                    }, 
                    secret,
                );
                return res.status(200).json({token, user});
            }
            
            if(!email) {
                return res.status(422).json({email:"Preencha o campo de email."});
            }
            if(!password) {
                return res.status(422).json({password:"Preencha o campo de senha."});
            }

            const user = await User.findOne({ email: email})
            if(!user) return res.status(404).json({email:"Usuário não encontrado."});

            const checkPassword = await bcrypt.compare(password, user.password);
            if(!checkPassword) {
                return res.status(422).json({password:"Senha incorreta e/ou inválida."});
            }
            
            try {
                const secret = process.env.SECRET;
                const token = jwt.sign(
                    {
                        id: user._id,
                    }, 
                    secret,
                );
                return res.status(200).json({token, user, msg:"Usuário logado com sucesso"});
            } catch (err) {
                return console.log(err);
            }
        } catch (err) {
            return res.json(err);
        }
    } 
};

export default authController;