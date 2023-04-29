import mongoose from "mongoose";

const { Schema } = mongoose;

const sellerSchema = new Schema({
    nmVendedorCompleto: {
        type: String,
        required: true
    },
    nmVendedor: {
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
    }
}, {timestamps: true}
);

const Seller = mongoose.model("Seller", sellerSchema);

export { Seller, sellerSchema }