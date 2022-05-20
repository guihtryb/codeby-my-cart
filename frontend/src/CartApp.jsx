import React, { useContext } from 'react';
import CartList from './components/CartList';
import context from './context/Context';

import './styles/CartApp.css';

function CartApp() {
  const { cartTotalPrice } = useContext(context);

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
        <CartList />
        <hr className="cart-box-sob-total" />
        <h2
          data-testid="cart-total-price"
          className="cart-total-price"
        >
          {`Total R$${cartTotalPrice}`}
        </h2>
      </div>
    </div>
  );
}

export default CartApp;
