import express from "express";

const routes = express.Router();

import forgotPasswordRoutes from "./forgotPassword.js";
import authRoutes from "./auth.js";
import usersRoutes from "./users.js";
import addressRoutes from "./address.js";
import fairRoutes from "./fair.js";
import publicationRoutes from "./publication.js";
import pictureRoutes from "./picture.js";
import followRoutes from "./follow.js";

routes.use("/password-reset", forgotPasswordRoutes);
routes.use("/auth", authRoutes);
routes.use("/user", usersRoutes);
routes.use("/fair", fairRoutes);
routes.use("/address", addressRoutes);
routes.use("/publication", publicationRoutes);
routes.use("/picture", pictureRoutes);
routes.use("/following", followRoutes);

export default routes;
