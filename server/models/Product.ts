import mongoose, { Schema, Document } from "mongoose";

// Define an interface for the Product document
interface ProductDocument extends Document {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: {
    type: mongoose.Schema.Types.ObjectId;
    required: true;
  };
  brand: string;
  images: string[];
  stock: number;
  reviews: {
    type: mongoose.Schema.Types.ObjectId;
  };
  numReviews: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const ProductSchema: Schema = new Schema<ProductDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discountPrice: {
      type: Number,
      default: 0, // Discounted price, if any
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
    brand: {
      type: String,
      required: true,
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0, // Number of items in stock
    },
    numReviews: {
      type: Number,
      default: 0, // Total number of reviews
    },
    isFeatured: {
      type: Boolean,
      default: false, // Flag to mark product as featured
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the model
const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
