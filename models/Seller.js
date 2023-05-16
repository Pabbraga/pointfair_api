import mongoose from "mongoose";

const { Schema } = mongoose;

const sellerSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    photo: {
        type: Array,
        require: false
    },
    cnpj: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: false
    }]
}, {timestamps: true}
);

const Seller = mongoose.model("Seller", sellerSchema);

export { Seller, sellerSchema }