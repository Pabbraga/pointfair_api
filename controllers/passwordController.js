import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import nodemailer from "nodemailer";

const passwordController = {
  generateCode: async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.status(404).json("Usuário não encontrado");
    }
    const passwordCode = Math.floor(100000 + Math.random() * 900000);

    User.passwordCode = passwordCode;
    await User.save();

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "@mail.com",
          pass: "senha",
        },
      });

      const mailOptions = {
        from: "pointfair.entreprise@gmail.com",
        to: User.email,
        subject: "Código de senha",
        text: `Seu código de senha é: ${passwordCode}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json("Código de senha gerado e enviado com sucesso");
    } catch (error) {
      console.error(error);
      res.status(500).json("Erro ao enviar o e-mail");
    }
  },
};
