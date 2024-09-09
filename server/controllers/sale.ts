import { RequestHandler } from "express";
import { saleLogic } from "../businessLogics/sale.logic";

export const SaleController: {
  createSale: RequestHandler;
  getSales: RequestHandler;
} = {
  async createSale(req, res, next) {
    try {
      const input = req.body;

      const response = await saleLogic.createSale(input);
      res.json({
        success: true,
        message: "Sale created successfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,
        message: " Could not create",
      });
    }
  },
  async getSales(req, res, next) {
    try {
      const response = await saleLogic.getSales();
      res.json({
        success: true,
        message: "Sales fetched successfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
};
