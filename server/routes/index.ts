import express from "express";
import userRoutes from "./user.routes";
import categoryRoutes from "./category.routes";
const router = express.Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

export default router;
