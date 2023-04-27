import { db } from "../db.js"

export const getFeiras = async(_, res) => {
    const q = "SELECT cdFeira,nmFeira, DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM feiras";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addFeira = async(req, res) => {
    const q = "INSERT INTO feiras(`nmFeira`, `data_registro`) VALUES(?)";
    const dt_atual = new Date()
    const values = [
        req.body.nmFeira,
        dt_atual
    ]
    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Feira criado com sucesso.");
    })
}

export const updateFeira = async(req, res) => {
    const q = "UPDATE feiras SET `nmFeira` = ? WHERE `cdFeira` = ?";
    const values = [
        req.body.nmFeira
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Feira atualizado com sucesso.");
    });
};

export const getFeira = async(req, res) => {
    const q = "SELECT cdFeira,nmFeira,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM feiras WHERE `cdFeira` = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const deleteFeira = async(req, res) => {
    const q = "DELETE FROM feiras WHERE `cdFeira` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Feira excluído com sucesso.")
    });
};