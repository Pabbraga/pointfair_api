import mongoose from "mongoose";
import * as gridStore from "mongoose-gridstore";

const { Schema } = mongoose;

const pictureSchema = new Schema({
    name: String,
    info: String,
    imgData: String,
    interval: Number
});

const pictureCollection = new Schema({
    name: {
        type: String,
        require: true
    },
    picture: [pictureSchema]
});

pictureCollection.plugin(gridStore);

const Picture = mongoose.model("Picture", pictureSchema);

export { Picture, pictureCollection };