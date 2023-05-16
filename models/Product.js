import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    nmProduct: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: Array,
        require: true
    },
    inStock: {
        type: Boolean,
        require: true
    }
}, {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);

export { Product, productSchema };