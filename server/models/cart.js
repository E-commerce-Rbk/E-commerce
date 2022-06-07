import mongoose from "mongoose";
const CartSchema = mongoose.Schema({
  userId: String,
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});
const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
