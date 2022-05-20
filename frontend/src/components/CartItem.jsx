import PropTypes from 'prop-types';
import React from 'react';
import getItemTitle from '../utils';

function CartItem({ item, index }) {
  return (
    <li
      data-testid={`cart-item-${index}`}
      className="cart-item"
    >
      <h2
        data-testid={`cart-item-title-${index}`}
        className="cart-item-title"
      >
        { getItemTitle(item.name) }
      </h2>
      <img
        src={item.imageUrl}
        alt={`${getItemTitle(item.name)}`}
        data-testid={`cart-item-image-${index}`}
        className="cart-item-image"
      />
    </li>

  );
}

CartItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    uniqueId: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
