import express from "express";
import { CustomerController } from "../controllers/customer";

const router = express.Router();

router.post("/create", CustomerController.createCustomer);
router.get("/customers", CustomerController.getCustomers);

export default router;
