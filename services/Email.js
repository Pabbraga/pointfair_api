var dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_TEST_APP_PSWD,
  },
});

module.exports = {
  verifyUserEmail: async function verifyUserEmail(name, userEmail, token) {
    try {
      let info = await transporter.sendMail({
        from: process.env.EMAIL_TEST,
        to: userEmail,
        subject: "Welcome" + name,
        text: "Hello mano",
        html: "<b>Hello World</b>",
      });
      console.log(info.messageId);
      console.log("Testando");
    } catch (err) {
      console.log(err);
    }
  },
};
