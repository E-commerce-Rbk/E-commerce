import product from "../models/product.js"
export const getProduct=async(req,res)=>{
    try{
        const products=await product.find();
        res.status(200).json(products)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}
