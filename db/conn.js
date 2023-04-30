import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const user = process.env.USER;
const pass = process.env.PASS;
const cluster = process.env.CLUSTER;

const main = async() => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(`mongodb+srv://${user}:${pass}@${cluster}.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Conexão efetuada com sucesso.");
    } catch (err) {
        console.log(err)
    }
}

export default main;