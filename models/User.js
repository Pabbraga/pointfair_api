import mongoose from "mongoose";
import { sellerSchema } from "./Seller.js" 

const { Schema } = mongoose;

const userSchema = new Schema({
    nmUsuarioCompleto: {
        type: String,
        required: true
    },
    nmUsuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: false
    },
    localidade: {
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    identificador:{
        type: String,
        required: true
    },
    seguindo: {
        type: String,
        required: false
    },
    following: {
        type: [sellerSchema]
    }
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export { User, userSchema };