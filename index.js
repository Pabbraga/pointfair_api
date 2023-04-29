import express from "express";
import cors from "cors";

import usersRoutes from "./routes/usuarios.js";
import productsRoutes from "./routes/produtos.js";
import sellersRoutes from "./routes/vendedores.js";
import fairsRoutes from "./routes/feiras.js";
import addressesRoutes from "./routes/enderecos.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", usersRoutes);
app.use("/product", productsRoutes);
app.use("/seller", sellersRoutes);
app.use("/fair", fairsRoutes);
app.use("/address", addressesRoutes);

app.listen(8000, ()=>{
    console.log("Servidor se encontra na rota: http://localhost:8000");
});