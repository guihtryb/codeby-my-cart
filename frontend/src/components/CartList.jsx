import React, { useContext } from 'react';
import context from '../context/Context';

import '../styles/components/CartList.css';
import CartItem from './CartItem';

function CartList() {
  const { itemsOnCart } = useContext(context);

  return (
    <ul
      data-testid="cart-items"
      className="cart-items"
    >
      {
      itemsOnCart.map((item, index) => (
        <CartItem
          item={item}
          index={index}
          key={item.uniqueId}
        />
      ))
    }
    </ul>
  );
}

export default CartList;
