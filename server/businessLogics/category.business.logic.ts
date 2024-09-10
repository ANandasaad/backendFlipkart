import Category from "../models/Category";
import { BadRequest } from "http-errors";
export const CategoryLogic = {
  async createCategory(name: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const category = await Category.findOne({ name });

        if (category) throw new BadRequest("Category is already exists");
        const create = await Category.create({ name });
        return resolve(create);
      } catch (error) {
        reject(error);
      }
    });
  },
  async getCategories() {},
  async getCategoryId() {},
  async deleteCategory() {},
};
