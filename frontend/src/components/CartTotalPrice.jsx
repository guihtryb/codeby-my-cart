import PropTypes from 'prop-types';
import React from 'react';

function CartTotalPrice({ totalPrice }) {
  return (
    <h2
      data-testid="cart-total-price"
      className="cart-total-price"
    >
      Total
      {' '}
      <span
        data-testid="total-price"
      >
        {`R$ ${(totalPrice)}`}
      </span>
    </h2>
  );
}

CartTotalPrice.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default CartTotalPrice;
