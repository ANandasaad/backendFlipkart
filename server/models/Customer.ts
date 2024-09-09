import mongoose from "mongoose";

const customerModel = new mongoose.Schema(
  {
    name: { type: "string", required: true },
    city: { type: "string", required: true },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerModel);

export default Customer;
