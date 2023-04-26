import { db } from "../db.js"

export const getVendedores = async(req, res) => {
    try {
        const vendedor = await modelVendedor.findAll();
        return res.json(vendedor);
    } catch (error) {
        return console.error("Erro ao consultar lista de Vendedor.", error);
    }
}

export const addVendedor = async(req, res) => {
    try {
        const vendedor = await modelVendedor.create(
            {
                nmVendedorCompleto: req.body.nmVendedorCompleto,
                nmUsuario: req.body.nmUsuario,
                cnpj: req.body.cnpj,
                senha: req.body.senha,
                email: req.body.email,
                data_registro: req.body.data_registro
            }
        );
        return res.json(vendedor);
    } catch (error) {
        return console.error("Vendedor não pode ser cadastrado.", error);
    }
}

export const updateVendedor = async(req, res) => {
    try {
        const vendedor = await modelVendedor.findByPk(req.body.cdVendedor);
        if(vendedor) {
            vendedor.nmVendedorCompleto = req.body.nmVendedorCompleto;
            vendedor.nmUsuario = req.body.nmUsuario;
            vendedor.cnpj = req.body.cnpj;
            vendedor.senha = req.body.senha;
            vendedor.email = req.body.email;

            await vendedor.save();
        }
        return res.json(vendedor);
    } catch (error) {
        return console.error(`Os dados de ${req.body.nmUsuario} não foram atualizados.`, error);
    }
}

export const getVendedor = async(req, res) => {
    try {
        const vendedor = await modelVendedor.findByPk(req.body.cdVendedor);
        return res.json(vendedor);
    } catch (error) {
        return console.error("Usuário não encontrado.", error);
    }
}

export const deleteVendedor = async(req, res) => {
    try {
        const vendedor = await modelVendedor.findByPk(req.body.cdVendedor);
        await vendedor.destroy();
        return res.json(vendedor);
    } catch (error) {
        return console.error("Registros do usuário não foram deletados.", error);
    }
}