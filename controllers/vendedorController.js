import { db } from "../db.js"

export const getVendedores = async(_, res) => {
    const q = "SELECT cdVendedor, nmVendedorCompleto, nmUsuario, cnpj, email, telefone, DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM vendedores";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addVendedor = async(req, res) => {
    const q = "INSERT INTO vendedores(`nmVendedorCompleto`, `nmUsuario`, `cnpj`, `email`, `telefone`, `data_registro`) VALUES(?)";
    const dt_atual = new Date()
    const values = [
        req.body.nmVendedorCompleto,
        req.body.nmUsuario,
        req.body.cnpj,
        req.body.email,
        req.body.telefone,
        dt_atual
    ]
    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Feira criado com sucesso.");
    })
}

export const updateVendedor = async(req, res) => {
    const q = "UPDATE vendedores SET `nmVendedorCompleto` = ?, `nmUsuario` = ?, `cnpj` = ?, `email` = ?, `telefone` = ? WHERE `cdUsuario` = ?";
    const values = [
        req.body.nmUsuarioCompleto,
        req.body.nmUsuario,
        req.body.cnpj,
        req.body.email,
        req.body.telefone
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Vendedor atualizado com sucesso.");
    });
};

export const getVendedor = async(req, res) => {
    const q = "SELECT cdVendedor,nmVendedorCompleto,nmUsuario,cnpj,email,telefone,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM vendedores WHERE `cdVendedor` = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const deleteVendedor = async(req, res) => {
    const q = "DELETE FROM vendedores WHERE `cdVendedor` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Vendedor excluído com sucesso.")
    });
};