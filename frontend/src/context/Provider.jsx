/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import api from '../service';
import context from './Context';

function Provider({ children }) {
  const [itemsOnCart, setItemsOnCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const getitems = async (endpoint = 'items-above-ten') => {
    const { data: { items } } = await api.get(endpoint);

    setItemsOnCart(items);
  };

  const getTotalPrice = async (endpoint = 'items-above-ten') => {
    const { data: { value } } = await api.get(endpoint);
    const totalPrice = value / 100;

    setCartTotalPrice(totalPrice);
  };

  useEffect(() => {
    getitems();
    getTotalPrice();
  }, []);

  const contextValue = {
    itemsOnCart,
    cartTotalPrice,
  };

  return (
    <context.Provider value={contextValue}>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
