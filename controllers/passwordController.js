import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const passwordController = {
  generateCode: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json("Usuário não encontrado");
      }

      const passwordCode = Math.floor(100000 + Math.random() * 900000);

      user.passwordCode = passwordCode;
      await user.save();

      const smtp = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const configEmail = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: "Código de senha",
        html: `<p>Seu código de senha é: <strong>${passwordCode}</strong></p>`,
      };

      smtp.sendMail(configEmail, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json("Erro ao enviar o e-mail");
        } else {
          console.log("E-mail enviado:", info.response);
          res.status(200).json("Código de senha enviado com sucesso");
        }
        smtp.close();
      });
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro ao gerar o código de senha");
    }
  },

  resetPassword: async (req, res) => {
    const { email, code, newPassword } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json("Usuário não encontrado");
      }

      if (user.passwordCode !== code) {
        return res.status(400).json("Código de verificação inválido");
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

      user.password = hashedPassword;
      user.passwordCode = null;
      await user.save();

      res.status(200).json("Senha redefinida com sucesso");
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro ao redefinir a senha");
    }
  },
};

export default passwordController;
