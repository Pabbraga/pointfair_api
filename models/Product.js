import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    nmProduto: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);

export { Product, productSchema };