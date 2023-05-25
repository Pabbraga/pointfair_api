import mongoose from "mongoose";

const { Schema } = mongoose;

const publicationSchema = new Schema({
    description: {
        type: String,
        require: false
    },
    imageUrl: {
        type: String,
        require: false
    },
    inStock: {
        type: Boolean,
        require: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: false
    }
}, {timestamps: true}
);

const Publication = mongoose.model("Publication", publicationSchema);

export { Publication, publicationSchema };