import UserModel from "../models/User";
import { BadRequest, NotFound } from "http-errors";
import { ComparePassword, HashPassword } from "../utils/passwordHash";
import jwt from "jsonwebtoken";
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

interface UserLoginType {
  email: string;
  password: string;
}

export const UserBusinessLogic = {
  async signUp(request: any, input: UserType) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.findOne({ email: input.email });

        if (user) throw new BadRequest("User already exists");
        const create = await UserModel.create({
          ...input,
          password: await HashPassword(input.password),
        });

        const jwtToken = jwt.sign(
          {
            id: create?._id,
            email: create.email,
          },
          process.env.JWT_KEY!
        );

        request.session = {
          jwt: jwtToken,
        };
        return resolve(create);
      } catch (error) {
        reject(error);
      }
    });
  },
  async login(request: any, input: UserLoginType) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.findOne({ email: input.email });

        if (!user) throw new BadRequest("User not found");
        const comparePassword = await ComparePassword(
          input.password,
          user.password
        );
        if (!comparePassword) throw new BadRequest("Password is incorrect");
        const jwtToken = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.JWT_KEY!
        );

        request.session = {
          jwt: jwtToken,
        };
        return resolve(user);
      } catch (error) {
        reject(error);
      }
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
  async GetUserProfile(userId: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await UserModel.findById(userId).select("-password");
        if (!user) throw new NotFound("User not found");
        return resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  },
  async GetUsers() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {}
    });
  },
};
