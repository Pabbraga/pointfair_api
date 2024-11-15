import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    nickname: {
      type: String,
      require: true,
    },
    isSeller: {
      type: Boolean,
      require: true,
    },
    cnpj: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    photoUrl: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
    phone: {
      type: String,
      require: false,
    },
    location: {
      type: Object,
      require: false,
    },
    fair: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fair",
      require: false,
    },
    following: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      require: false,
    },
    schedules: {
      type: Object,
      default: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturnday: "",
      },
      require: false,
    },
    passwordCode: {
      type: String,
      require: false,
    },  
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User, userSchema };
