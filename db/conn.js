import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = process.env.DATABASE_URL;

const main = async() => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(db);
        console.log("Conexão efetuada com sucesso.");
    } catch (err) {
        console.log(err)
    }
}

export default main;