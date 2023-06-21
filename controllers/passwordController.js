import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import nodemailer from "nodemailer";

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

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "pointfair.entreprise@gmail.com",
          pass: "pointfair2023",
        },
      });

      const mailOptions = {
        from: "pointfair.entreprise@gmail.com",
        to: email,
        subject: "Código de senha",
        text: `Seu código de senha é: ${passwordCode}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json("Código de senha gerado e enviado com sucesso");
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro ao gerar e enviar o código de senha");
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
