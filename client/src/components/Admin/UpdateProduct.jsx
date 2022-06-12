import React from "react";
import "./updateProduct.css";
function UpdateProduact() {
  return (
    <div>
      <center>
        <div className="newProduct">
          <h1 className="addProductTitle">Update Product</h1>
          <img src="https://www.biensdeconso.com/wp-content/uploads/sites/6/2016/08/Fotolia_46519937_L-Copie-2-e1566939175410-300x200.jpg" alt="" />
          <form className="addProductForm">
            
            <div className="addProductItem">
              <label>Title</label>
              <input name="title" type="text" placeholder="Apple Airpods" />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input name="desc" type="text" placeholder="description..." />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input name="price" type="number" placeholder="100" />
            </div>
            <div className="addProductItem">
              <label>Categories</label>
              <input type="text" placeholder="jeans,skirts" />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <input type="text" placeholder="........" />
            </div>
          </form>
        </div>
        <button className="updateProductButton">Update</button>
      </center>
    </div>
  );
}
export default UpdateProduact;
