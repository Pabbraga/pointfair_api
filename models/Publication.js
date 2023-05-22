import mongoose from "mongoose";

const { Schema } = mongoose;

const publicationSchema = new Schema({
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