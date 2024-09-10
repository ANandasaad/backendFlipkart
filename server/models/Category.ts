import mongoose, { Schema } from "mongoose";

interface CategoryDocument extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema<CategoryDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<CategoryDocument>("Category", CategorySchema);
export default Category;
