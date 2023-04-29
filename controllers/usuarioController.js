import { db } from "../db.js"

export const getUsuarios = async(_, res) => {
    const q = "SELECT cdUsuario,nmUsuarioCompleto,nmUsuario,email,telefone,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM usuarios";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addUsuario = async(req, res) => {
    const q = "INSERT INTO usuarios(`nmUsuarioCompleto`, `nmUsuario`, `email`, `telefone`, `data_registro`) VALUES(?)";
    const dt_atual = new Date()
    const values = [
        req.body.nmUsuarioCompleto,
        req.body.nmUsuario,
        req.body.email,
        req.body.telefone,
        dt_atual
    ]
    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    })
}

export const updateUsuario = async(req, res) => {
    const q = "UPDATE usuarios SET `nmUsuarioCompleto` = ?, `nmUsuario` = ?, `email` = ?, `telefone` = ? WHERE `cdUsuario` = ?";
    const values = [
        req.body.nmUsuarioCompleto,
        req.body.nmUsuario,
        req.body.email,
        req.body.telefone
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const getUsuario = async(req, res) => {
    const q = "SELECT cdUsuario,nmUsuarioCompleto,nmUsuario,email,telefone,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM usuarios WHERE `cdUsuario` = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const deleteUsuario = async(req, res) => {
    const q = "DELETE FROM usuarios WHERE `cdUsuario` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Usuário excluído com sucesso.")
    });
};