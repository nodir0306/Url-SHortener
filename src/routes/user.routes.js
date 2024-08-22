import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user_controller.js";

const userRoutes = Router();
userRoutes
    .post("/create", createUser)
    .get("/", getAllUsers)
    .get("/:id", getUserById)
    .put("/update/:id", updateUser)
    .delete("/delete/:id", deleteUser)

export default userRoutes
