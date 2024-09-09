import mongoose from "mongoose";

const SaleModel = new mongoose.Schema(
  {
    item: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", SaleModel);
export default Sale;
