/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import api from '../service';
import context from './Context';

function Provider({ children }) {
  const [itemsOnCart, setItemsOnCart] = useState([]);

  const getitems = async (endpoint = 'items-above-ten') => {
    const { data: { items } } = await api.get(endpoint);

    setItemsOnCart(items);
  };

  useEffect(() => {
    getitems();
  }, []);

  const contextValue = {
    itemsOnCart,
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
