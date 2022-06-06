import mongoose from "mongoose";


const productSchema=mongoose.Schema({
    productName:String,
});
const Product = mongoose.model('Product',productSchema);
export default Product;