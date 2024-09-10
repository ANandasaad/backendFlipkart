import express from "express";
import { CategoryController } from "../controllers/category.controller";
const categoryRoutes = express.Router();

categoryRoutes.post("/create", CategoryController.createCategory);

export default categoryRoutes;
