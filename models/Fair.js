import mongoose from "mongoose";

const { Schema } = mongoose;

const fairSchema = new Schema({
    nmFeira: {
        type: String,
        required: true
    },
    
}, {timestamps: true}
);

const Fair = mongoose.model("Fair", fairSchema);

export { Fair, fairSchema }