import React from "react";

export default function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>🛍️ Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <button className="checkout-btn" onClick={() => alert("Order Placed!")}>Checkout</button>}
    </div>
  );
}
