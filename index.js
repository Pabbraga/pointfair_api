import express from "express";
import cors from "cors";
import routes from "./routes/router.js";
import conn from "./db/conn.js";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

conn();

app.use('/', routes);

app.listen(port, ()=>{
    console.log(`Servidor se encontra na rota: http://localhost:${port}`);
});