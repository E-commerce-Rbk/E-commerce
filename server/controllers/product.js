import Product from "../models/product.js";
//read all products
export const getAllProduct = function (req, res) {
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "products not found", error: err.message });
    });
};
//create new product
export const addProduct = function (req, res) {
  Product.create(req.body)
    .then((data) =>
      res.status(201).json({ message: "successfuly added", data })
    )
    .catch((err) => {
      res.status(400).json({ message: "failed add", error: err.message });
    });
};
//delete Product
export const deletProduct = function (req, res) {
  Product.findByIdAndDelete(req.params._id)
    .then((data) => res.json({ message: "deleted successfully", data }))
    .catch((err) =>
      res.status(404).json({ message: "Product not found", error: err.message })
    );
};
//update Product
export const updateProduct = function (req, res) {
  Product.findByIdAndUpdate(req.params._id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to update", error: err.message })
    );
};
//find by name(req.body)
export const findProduct = function (req, res) {
  Product.find(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "products not found", error: err.message });
    });
};
export const getOneProdById = function (req, res) {
  Product.findById(req.params._id)
     .then((data) => res.json({ message: "Prod existing", data }))
     .catch((err) =>
       res.status(404).json({ message: "prod not found", error: err.message })
     );
 }
