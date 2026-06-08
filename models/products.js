import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    description: String,
    category: String,
    brand: String,
    price: { type: Number, required: true },
    costPrice: { type: Number },
    stock: { type: Number, default: 0 },
    minStockLevel: { type: Number, default: 0 },
    tags: [{ type: String }],
    weight: Number,
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    isFeatured: { type: Boolean, default: false },
    deletedAt: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
