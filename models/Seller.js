import mongoose from "mongoose";

const { Schema } = mongoose;

const sellerSchema = new Schema({
    nmFullSeller: {
        type: String,
        require: true
    },
    nmSeller: {
        type: String,
        require: true
    },
    photo: {
        type: String,
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
    // publishes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Publish'
    // }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        require: false
    }]
}, {timestamps: true}
);

const Seller = mongoose.model("Seller", sellerSchema);

export { Seller, sellerSchema }