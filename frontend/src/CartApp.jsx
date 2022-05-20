import React from 'react';
import './styles/CartApp.css';

function CartApp() {
  return (
    <div
      data-testid="cart-container"
      className="cart-container"
    >
      <div
        data-testid="cart-box"
        className="cart-box"
      >
        <h1 className="cart-title">
          Meu carrinho
        </h1>
        <hr />
      </div>
    </div>
  );
}

export default CartApp;
