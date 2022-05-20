import PropTypes from 'prop-types';
import React from 'react';

function ItemTitle({ title, index }) {
  return (
    <h2
      data-testid={`cart-item-title-${index}`}
      className="cart-item-title"
    >
      { title }
    </h2>
  );
}

ItemTitle.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ItemTitle;
