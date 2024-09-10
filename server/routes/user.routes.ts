import express from "express";
import { UserController } from "../controllers/user.controller";
import { currentUser } from "../middlewares/current.user.middleware";
const userRoutes = express.Router();
userRoutes.post("/signup", UserController.signUp);
userRoutes.post("/login", UserController.login);
userRoutes.get("/profile", currentUser, UserController.GetUserProfile);

export default userRoutes;
