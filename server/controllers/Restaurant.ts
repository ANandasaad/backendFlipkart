import { RequestHandler } from "express";
import { RestaurantLogic } from "../businessLogics/restaurant";

export const RestaurantController: {
  createRes: RequestHandler;
  fetchRes: RequestHandler;
} = {
  async createRes(req, res, next) {
    try {
      const input = req.body;
      const response = await RestaurantLogic.create(input);
      res.json({
        success: true,
        message: "Created restaurant successfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Failed to create restaurant",
        data: error,
      });
    }
  },
  async fetchRes(req, res, next) {
    try {
      const response = await RestaurantLogic.fetchs();

      res.json({
        success: true,
        message: "Fetched restaurant successfully",
        data: response,
      });
    } catch (error) {
      res.json({
        success: false,

        data: error,
      });
    }
  },
};
