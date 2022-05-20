import React, { useContext } from 'react';
import CartList from './components/CartList';
import CartTotalPrice from './components/CartTotalPrice';
import FinshBuyBtn from './components/FinishBuyBtn';
import FreeDeliveryMsg from './components/FreeDeliveryMsg';
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
        <CartTotalPrice totalPrice={cartTotalPrice} />
        {
        cartTotalPrice > 10
          && <FreeDeliveryMsg />
        }
        <hr className="cart-box-sub-total" />
        <FinshBuyBtn />
      </div>
    </div>
  );
}

export default CartApp;
