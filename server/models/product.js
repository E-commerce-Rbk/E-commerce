import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: String,
  category: {
    type: String,
    enum: [
      "Jewlery and Watches",
      "Home And Garden",
      "Computer Electronic",
      "Beauty Product",
    ],
  },
  price: Number,
  imageUrl: String,
  stock: Number,
  description: String,
  date_added: { type: Date, default: Date.now },
});
const Product = mongoose.model("Product", productSchema);
export default Product;
