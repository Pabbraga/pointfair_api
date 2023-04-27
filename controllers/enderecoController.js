import { db } from "../db.js"

export const getEnderecos = async(_, res) => {
    const q = "SELECT cdEndereco,nmCidade,nmBairro,nmRua,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM enderecos";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addEndereco = async(req, res) => {
    const q = "INSERT INTO enderecos(`nmCidade`, `nmBairro`, `nmRua`, `data_registro`) VALUES(?)";
    const dt_atual = new Date()
    const values = [
        req.body.nmCidade,
        req.body.nmBairro,
        req.body.nmRua,
        dt_atual
    ]
    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    })
}

export const updateEndereco = async(req, res) => {
    const q = "UPDATE enderecos SET `nmCidade` = ?, `nmBairro` = ?, `nmRua` = ? WHERE `cdEndereco` = ?";
    const values = [
        req.body.nmCidade,
        req.body.nmBairro,
        req.body.nmRua,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const getEndereco = async(req, res) => {
    const q = "SELECT cdEndereco,nmCidade,nmBairro,nmRua,telefone,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM usuarios WHERE `cdUsuario` = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const deleteEndereco = async(req, res) => {
    const q = "DELETE FROM enderecos WHERE `cdEndereco` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Endereço excluído com sucesso.")
    });
};