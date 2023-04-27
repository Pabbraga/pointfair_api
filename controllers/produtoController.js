import { db } from "../db.js"

export const getProduto = async(_, res) => {
    const q = "SELECT cdProtudo,nmproduto, descricao, DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM produtos";
    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addProduto = async(req, res) => {
    const q = "INSERT INTO Produtos(`nmProduto`, `descricao`, `data_registro`) VALUES(?)";
    const dt_atual = new Date()
    const values = [
        req.body.nmProduto,
        req.body.descricao,
        dt_atual
    ]
    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto criado com sucesso.");
    })
}

export const updateProduto = async(req, res) => {
    const q = "UPDATE protudos SET `nmProduto` = ? WHERE `cdproduto` = ?";
    const values = [
        req.body.nmProduto,
        req.body.descricao
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto atualizado com sucesso.");
    });
};

export const getProdutos = async(req, res) => {
    const q = "SELECT cdProduto,nmProduto,DATE_FORMAT(data_registro,'%Y-%m-%d') as data_registro FROM produtos WHERE `cdProduto` = ?"
    
    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const deleteProduto = async(req, res) => {
    const q = "DELETE FROM produtos WHERE `cdproduto` = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Produto excluído com sucesso.")
    });
};