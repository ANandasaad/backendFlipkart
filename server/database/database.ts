import mongoose from "mongoose";

export const ConnectDB = async (callBack: {
  (error: any, message: any): void;
  (arg0: unknown, arg1: string | null): void;
}) => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    callBack(null, "Connect is Successful");
  } catch (error) {
    callBack(error, null);
  }
};
