import mongoose from "mongoose";

const { Schema } = mongoose;

const pictureSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    file: {
        type: Array,
        require: true
    }
});

const Picture = mongoose.model("Picture", pictureSchema);

export { Picture, pictureSchema };