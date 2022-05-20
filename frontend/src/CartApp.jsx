import React, { useContext } from 'react';
import CartList from './components/CartList';
import CartTotalPrice from './components/CartTotalPrice';
import context from './context/Context';

import './styles/CartApp.css';

function CartApp() {
  const { cartTotalPrice } = useContext(context);

  const freeDeliveryMsg = 'Parabéns, sua compra tem frete grátis !';

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
        <CartTotalPrice totalPrice={cartTotalPrice} />
        {
        cartTotalPrice > 10
          && (
          <span
            data-testid="free-delivery-msg"
            className="free-delivery-msg"
          >
            {`${freeDeliveryMsg}`}
          </span>
          )
        }
        <hr className="cart-box-sob-total" />
      </div>
    </div>
  );
}

export default CartApp;
