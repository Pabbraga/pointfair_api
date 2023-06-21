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

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
      });

      let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: "Código de senha",
        text: `<p>Seu código de senha é: <strong>${passwordCode}</strong></p>`,
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
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
