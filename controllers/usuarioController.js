const modelUsuario = require('../models/usuario');

module.exports =
{
    async List(req, res)
    {
        try {
            const usuario = await modelUsuario.findAll();
            return res.json(usuario);
        } catch (error) {
            return console.error("Erro ao consultar lista de usuários.", error);
        }
    },

    async Add(req, res) 
    {
        try {
            const usuario = await modelUsuario.create(
                {
                    nmUsuarioCompleto: req.body.nmUsuarioCompleto,
                    nmUsuario: req.body.nmUsuario,
                    senha: req.body.senha,
                    email: req.body.email,
                    data_registro: req.body.data_registro
                }
            );
            return res.json(usuario);
        } catch (error) {
            return console.error("Usuário não pode ser cadastrado.", error);
        }
    },

    async Update(req, res) 
    {
        try {
            const usuario = await modelUsuario.findByPk(req.body.cdUsuario);
            if(usuario) {
                usuario.nmUsuarioCompleto = req.body.nmUsuarioCompleto;
                usuario.nmUsuario = req.body.nmUsuario;
                usuario.senha = req.body.senha;
                usuario.email = req.body.email;

                await usuario.save();
            }
            return res.json(usuario);
        } catch (error) {
            return console.error(`Os dados de ${req.body.nome} não foram atualizados.`, error);
        }
    },

    async ListOne(req, res) 
    {
        try {
            const usuario = await modelUsuario.findByPk(req.body.cdUsuario);
            return res.json(usuario);
        } catch (error) {
            return console.error("Usuário não encontrado.", error);
        }
    },

    async Delete(req, res)
    {
        try {
            const usuario = await modelUsuario.findByPk(req.body.cdUsuario);
            await usuario.destroy();
            return res.json(usuario);
        } catch (error) {
            return console.error("Registros do usuário não foram deletados.", error);
        }
    }
}
