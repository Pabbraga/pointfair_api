import express from "express";

const routes = express.Router()

import usersRoutes from "./users.js";
import sellersRoutes from "./sellers.js";
// import productsRoutes from "./produtos.js";
// import fairsRoutes from "./feiras.js";
// import addressesRoutes from "./enderecos.js";

routes.use("/user", usersRoutes);
// router.use("/product", productsRoutes);
routes.use("/seller", sellersRoutes);
// router.use("/fair", fairsRoutes);
// router.use("/address", addressesRoutes);

export default routes;