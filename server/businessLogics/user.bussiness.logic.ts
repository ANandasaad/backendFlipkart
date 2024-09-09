import UserModel from "../models/User";
import { BadRequest } from "http-errors";
enum Role {
  Customer,
  Admin,
}

interface UserType {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export const UserBusinessLogic = {
  async signUp(input: UserType) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.find({ email: input.email });
        if (user) throw new BadRequest("User already exists");
      } catch (error) {}
    });
  },
  async login() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  },
  async updateProfile() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  },
  async deleteUser() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  },
  async GetUserProfile() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  },
  async GetUsers() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  },
};
