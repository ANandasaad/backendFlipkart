import express from "express";
import { RestaurantController } from "../controllers/Restaurant";

const router = express.Router();

router.post("/create-res", RestaurantController.createRes);
router.get("/get-res", RestaurantController.fetchRes);
export default router;
