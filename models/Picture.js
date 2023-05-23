import mongoose from "mongoose";

const { Schema } = mongoose;

const pictureSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: false
    }

});

const Picture = mongoose.model("Picture", pictureSchema);

export { Picture, pictureSchema };