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
      const response = await UserBusinessLogic.signUp(input);
      res.send({
        success: true,
        message: "User signed up successfully",
        data: response,
      });
    } catch (error) {}
  },
  async login(req, res, next) {
    try {
    } catch (error) {}
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
    } catch (error) {}
  },
  async GetUsers(req, res, next) {
    try {
    } catch (error) {}
  },
};
