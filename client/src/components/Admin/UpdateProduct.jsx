import axios from "axios";
import React, { useState } from "react";
import "./updateProduct.css";
import { Link } from "react-router-dom";
function UpdateProduact({ item, update }) {
  const [object, setObject] = useState({
    productName: "",
    price: null,
    stock: null,
    description: "",
  });
  const handleChange = (e) => {
    e.persist();
    setObject((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };
  const updateData = () => {
    axios
      .put(`http://localhost:5000/product/${item._id}`, object)
      .then(update());
  };
  return (
    <div>
      <center>
        <div className="newProduct">
          <h1 className="addProductTitle">Update Product</h1>
          <img
            style={{ wiedth: "300px", height: "300px" }}
            src={item.imageUrl}
            alt=""
          />
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Product Name</label>
              <input
                name="productName"
                onChange={handleChange}
                type="text"
                placeholder="Apple Airpods"
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                name="description"
                onChange={handleChange}
                type="text"
                placeholder="description..."
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                name="price"
                onChange={handleChange}
                type="number"
                placeholder="100"
              />
            </div>

            <div className="addProductItem">
              <label>Stock</label>
              <input
                type="text"
                name="stock"
                onChange={handleChange}
                placeholder="........"
              />
            </div>
          </form>
        </div>
        <Link to="/adminview">
          <button
            type="submit"
            className="updateProductButton"
            onClick={() => {
              updateData();
            }}
          >
            Update
          </button>
        </Link>
      </center>
    </div>
  );
}
export default UpdateProduact;
