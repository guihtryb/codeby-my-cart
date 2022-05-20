import PropTypes from 'prop-types';
import React from 'react';
import getItemTitle from '../utils';
import ItemImage from './ItemImage';
import ItemTitle from './ItemTitle';

function CartItem({ item, index }) {
  const title = getItemTitle(item.name);

  return (
    <li
      data-testid={`cart-item-${index}`}
      className="cart-item"
    >
      <ItemTitle
        title={title}
        index={index}
      />
      <ItemImage
        url={item.imageUrl}
        title={title}
        index={index}
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
