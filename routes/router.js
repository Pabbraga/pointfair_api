import express from "express";

const routes = express.Router()

import usersRoutes from "./users.js";
import sellersRoutes from "./sellers.js";
import addressRoutes from "./address.js";
import fairRoutes from "./fair.js"
import productRoutes from "./product.js"
// import productsRoutes from "./produtos.js";
// import fairsRoutes from "./feiras.js";
// import addressesRoutes from "./enderecos.js";

routes.use("/user", usersRoutes);
// router.use("/product", productsRoutes);
routes.use("/seller", sellersRoutes);
// router.use("/fair", fairsRoutes);
routes.use("/fair", fairRoutes);
routes.use("/address", addressRoutes);
routes.use("/product", productRoutes);
// router.use("/address", addressesRoutes);

export default routes;