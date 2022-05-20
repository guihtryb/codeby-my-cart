import PropTypes from 'prop-types';
import React from 'react';

function ItemPrices({ price, sellingPrice, index }) {
  return (
    <>
      <span
        data-testid={`cart-item-price-${index}`}
        className="cart-item-price"
      >
        {`R$ ${price}`}
      </span>
      <span
        data-testid={`cart-item-selling-price-${index}`}
      >
        {`R$ ${sellingPrice}`}
      </span>
    </>
  );
}

ItemPrices.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  sellingPrice: PropTypes.number.isRequired,
};

export default ItemPrices;
