import { Router } from "express";
import urlRoutes from "./url.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();

router
    .use("/users",userRoutes)


export default router;
