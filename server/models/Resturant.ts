import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
  building: { type: String },
  cord: {
    type: [Number],
    index: "2dsphere",
  },
  street: { type: String },
  zip: { type: String },
});

const gradeSchema = new Schema({
  date: Date,
  grade: { type: String },
  score: { type: String },
});

const RestaurantModel = new mongoose.Schema({
  address: addressSchema,
  borough: { type: String },
  cuisine: { type: String },
  grade: [gradeSchema],
  name: { type: String },
});

const Restaurant = mongoose.model("Restaurant", RestaurantModel);
export default Restaurant;
