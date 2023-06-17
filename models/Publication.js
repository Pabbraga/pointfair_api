import mongoose from "mongoose";

const { Schema } = mongoose;

const publicationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: Object,
        required: false
    }
}, { timestamps: true });

const Publication = mongoose.model("Publication", publicationSchema);

export { Publication, publicationSchema };