const modelFeira = require('../models/feira');

module.exports =
{
    async List(req, res)
    {
        try {
            const feira = await modelFeira.findAll();
            return res.json(feira);
        } catch (error) {
            return console.error("Erro ao conjultar lista de feiras", error);
        }
    },

    async Add(req, res)
    {
        try {
           const feira = await modelFeira.create (
                {
                    nmFeira: req.body.nmFeira,
                }
            );
            return res.json(feira);
        } catch (error) {
            return console.error("Feira não pode ser cadastrado.")
        }
    },
    async Update(req, res)
    {
        try {
            const feira = await modelFeira.finByPK(req.body.cdFeira);
            if(feira) {
                feira.nmFeira = req.body.nmFeira;

                await feira.save();
            }
            return res.json(feira);
        } catch(error) {
            return console.error(`Os dados de ${req.body.nome} não foram atualizados.`, error);
        }
    },
    async ListOne(req, res) 
    {
        try {
            const feira = await modelFeira.findByPk(req.body.cdFeira);
            return res.json(feira);
        } catch (error) {
            return console.error("Feira não encontrado.", error);
        }
    },

    async Delete(req, res)
    {
        try {
            const feira = await modelFeira.findByPk(req.body.cdFeira);
            await feira.destroy();
            return res.json(feira);
        } catch (error) {
            return console.error("Registros de feira não foram deletados.", error);
        }
    }
}