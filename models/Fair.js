import mongoose from "mongoose";

const { Schema } = mongoose;

const fairSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    location: {
        type: Object,
        require: false
    }
}, {timestamps: true}
);

const Fair = mongoose.model("Fair", fairSchema);

export { Fair, fairSchema }