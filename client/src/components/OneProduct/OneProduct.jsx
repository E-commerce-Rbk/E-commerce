import React from "react";
import "./OneProduct.scss"
const OneProduct = () => {


  
  return (
    
    <section class="product">
    <div class="product__photo">
      <div class="photo-container">
        <div class="photo-main">
          <div class="controls">
          <label ></label>
            <i class="material-icons" for="heart"> ❤ </i>
            
          </div>
          <img src="https://m.media-amazon.com/images/I/71SGnSU+jrL._AC_SX679_.jpg" alt="photoe"></img>
        </div>
       
      </div>
    </div>
    <div class="product__info">
      <div class="title">
        <h1>DBUYDEEM DT640 4-Slice Toaster, Extra Wide Slots, Retro Stainless Steel with High Lift Lever</h1>
      </div>
      <div class="price">
      <h3>PRICE:</h3>
        TN <span>599Dt</span>
        
      </div>
      <div class="variant">
        <h3>STOCK:</h3>
        <span>5</span>
      </div>
      <div class="variant">
        <h3>CATEGORY:</h3>
        <span>Home & Garden</span>
      </div>
      <br/>
      <div class="description">
        <h3>DESCRIPTION</h3>
        <div>
        <p>
        About this item:
Bagel & Muffin Expert - True bagel toasting function, heats up both sides of the bagel initially, then only toasts the cutting side of the bagel. Enjoy your crispy cutting side bagel!
Extra Wide Slots - 4 wide (1.4'') slots with self-centering guides, perfect for different kinds of slices.
7 Toast Shade Settings - 7 browning controls for 5 basic functions with LED indicators. Satisfies all your daily toasting needs.
4 Slice Dual Independent Control Panels - Less time, more choices; solid high lift lever, fulfill different tastes at the same time. Enjoy your morning with the ultimate breakfast.

        </p>
        </div>
      </div>
      <br/>
      <h3>QUANTITY :</h3>
      <button class="buy--btn">ADD TO CART</button>
    </div> 
  </section>
  
 

  );
};

export default OneProduct;
