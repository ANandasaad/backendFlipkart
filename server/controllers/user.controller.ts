import { RequestHandler } from "express";
import { UserBusinessLogic } from "../businessLogics/user.bussiness.logic";

export const UserController: {
  signUp: RequestHandler;
  login: RequestHandler;
  updateProfile: RequestHandler;
  deleteUser: RequestHandler;
  GetUserProfile: RequestHandler;
  GetUsers: RequestHandler;
} = {
  async signUp(req, res, next) {
    try {
      const input = req.body;
      const response = await UserBusinessLogic.signUp(req, input);
      res.send({
        success: true,
        message: "User signed up successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      const input = req.body;
      const response = await UserBusinessLogic.login(req, input);
      res.send({
        success: true,
        message: "User logged in successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async updateProfile(req, res, next) {
    try {
    } catch (error) {}
  },
  async deleteUser(req, res, next) {
    try {
    } catch (error) {}
  },
  async GetUserProfile(req, res, next) {
    try {
      const userId = req.currentUser?.id;
      const response = await UserBusinessLogic.GetUserProfile(userId as string);
      res.send({
        success: true,
        message: "User profile was successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
  async GetUsers(req, res, next) {
    try {
    } catch (error) {}
  },
};
