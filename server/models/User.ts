import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Admin", "Customer"],
      default: "Customer",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", () => {});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
