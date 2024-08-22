import { Router } from "express";
import { createShortedUrl, deleteUrl, getAllShotedUrl, toShortedUrl } from "../controllers/url_controller.js";

const urlRoutes = Router();

urlRoutes
    .post("/short-url", createShortedUrl)
    .get("/", getAllShotedUrl)
    .get("/:shorter_url", toShortedUrl)
    .delete("/delete/:id",deleteUrl)

export default urlRoutes;
