import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
    nmCidade: {
        type: String,
        required: true
    },
    nmBairro: {
        type: String,
        required: true
    },
    nmRua: {
        type: String,
        required: true
    }
}, {timestamps: true}
);

const Address = mongoose.model("Address", addressSchema);

export { Address, addressSchema }