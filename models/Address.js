import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
    nmCity: {
        type: String,
        require: true
    },
    nmDistrict: {
        type: String,
        require: true
    },
    nmStreet: {
        type: String,
        require: true
    },
    complements: {
        type: String,
        require: false
    }
}, {timestamps: true}
);

const Address = mongoose.model("Address", addressSchema);

export { Address, addressSchema };