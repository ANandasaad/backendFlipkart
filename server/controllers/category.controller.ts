import { RequestHandler } from "express";
import { CategoryLogic } from "../businessLogics/category.business.logic";

export const CategoryController: {
  createCategory: RequestHandler;
  getCategories: RequestHandler;
  getCategoryById: RequestHandler;
  deleteCategory: RequestHandler;
} = {
  async createCategory(req, res, next) {
    try {
      const { name } = req.body;

      const response = await CategoryLogic.createCategory(name);
      res.send({
        success: true,
        message: "Category created successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async getCategoryById() {},
  async getCategories() {},
  async deleteCategory() {},
};
