import { RequestHandler } from "express";
import { customerLogic } from "../businessLogics/customer.logic";

export const CustomerController: {
  createCustomer: RequestHandler;
  getCustomers: RequestHandler;
} = {
  async createCustomer(req, res, next) {
    try {
      const { name, city } = req.body;

      const response = await customerLogic.createCustomer(name, city);

      res.json({
        success: true,
        message: "Customer created successfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error,
      });
    }
  },
  async getCustomers(req, res, next) {
    try {
      const response = await customerLogic.getCustomers();
      res.json({
        success: true,
        message: "Customer retrieved successfully",
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
