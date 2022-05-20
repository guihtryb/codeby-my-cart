import PropTypes from 'prop-types';
import React from 'react';

function ItemImage({ url, title, index }) {
  return (
    <img
      src={url}
      alt={title}
      data-testid={`cart-item-image-${index}`}
      className="cart-item-image"
    />
  );
}

ItemImage.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  url: PropTypes.number.isRequired,
};

export default ItemImage;
