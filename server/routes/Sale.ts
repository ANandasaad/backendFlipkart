import express from "express";
import { SaleController } from "../controllers/sale";

const router = express.Router();
router.post("/create-sale", SaleController.createSale);
router.get("/get-sales", SaleController.getSales);

export default router;
