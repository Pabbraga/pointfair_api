import mongoose from "mongoose";

const { Schema } = mongoose;

const fairSchema = new Schema({
    nmFair: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    // address: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Address',
    //     require: true
    // }
}, {timestamps: true}
);

const Fair = mongoose.model("Fair", fairSchema);

export { Fair, fairSchema }