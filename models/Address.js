import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
    city: {
        type: String,
        require: true
    },
    district: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: false
    },
    complements: {
        type: String,
        require: false
    },
    lagitude: {
        type: String,
        require: false
    },
    longitude: {
        type: String,
        require: false
    }
}, {timestamps: true}
);

const Address = mongoose.model("Address", addressSchema);

export { Address, addressSchema };