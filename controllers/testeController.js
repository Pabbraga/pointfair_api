const TesteController = {
    teste: async(req, res) => {
        try {
            return res.status(201).json("Teste.");
        } catch (err) {
            return res.json(err);
        }
    },
}

export default TesteController;