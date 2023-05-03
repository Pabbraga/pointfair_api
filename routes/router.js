import express from "express";

const routes = express.Router()

import authRoutes from "./auth.js";
import usersRoutes from "./users.js";
import sellersRoutes from "./sellers.js";
import addressRoutes from "./address.js";
import fairRoutes from "./fair.js";
import productRoutes from "./product.js";

routes.use("/auth", authRoutes);
routes.use("/user", usersRoutes);
routes.use("/seller", sellersRoutes);
routes.use("/fair", fairRoutes);
routes.use("/address", addressRoutes);
routes.use("/product", productRoutes);

export default routes;