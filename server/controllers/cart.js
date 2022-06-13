import Cart from "../models/cart.js";
// get all cart
export const getAllCarts = function (req, res) {
  Cart.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: "carts not found", error: err.message });
    });
};
//get user cart
export const getUserCart = function (req, res) {
  Cart.findOne({ userId: req.params.userId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "user cart not found", error: err.message });
    });
};
//delete cart
export const deleteCart = function (req, res) {
  Cart.findByIdAndDelete(req.params._id)
    .then((data) => res.json({ message: "deleted successfully", data }))
    .catch((err) =>
      res.status(404).json({ message: "cart not found", error: err.message })
    );
};
//update cart
export const updateCart = function (req, res) {
  Cart.findByIdAndUpdate(req.params._id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res.status(400).json({ message: "Failed to update", error: err.message })
    );
};
// create new cart
export const createCart = function (req, res) {
  Cart.create(req.body)
    .then((data) =>
      res.status(201).json({ message: "successfuly added", data })
    )
    .catch((err) => {
      res.status(400).json({ message: "failed add", error: err.message });
    });
};
