import PropTypes from 'prop-types';
import React from 'react';
import { getItemTitle, getItemPriceConverted } from '../utils';
import ItemImage from './ItemImage';
import ItemPrices from './ItemPrices';
import ItemTitle from './ItemTitle';

function CartItem({ item, index }) {
  const title = getItemTitle(item.name);
  const itemPrice = getItemPriceConverted(item.price);
  const itemSellingPrice = getItemPriceConverted(item.sellingPrice);

  return (
    <li
      data-testid={`cart-item-${index}`}
      className="cart-item"
    >
      <ItemImage
        url={item.imageUrl}
        title={title}
        index={index}
      />
      <div className="cart-item-infos">
        <ItemTitle
          title={title}
          index={index}
        />
        <ItemPrices
          price={itemPrice}
          sellingPrice={itemSellingPrice}
        />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    uniqueId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sellingPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
