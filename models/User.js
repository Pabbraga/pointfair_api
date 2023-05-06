import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: false
    },
    email: {
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
    password:{
        type: String,
        require: true
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        require: false
    }
}, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export { User, userSchema };