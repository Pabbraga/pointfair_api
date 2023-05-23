import mongoose from "mongoose";

const { Schema } = mongoose;

const pictureSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    data: {
        type: Buffer,
        require: true
    }
});

const Picture = mongoose.model("Picture", pictureSchema);

export { Picture, pictureSchema };