/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CartApp from '../CartApp';
import context from '../context/Context';
import items from './mocks/items';

describe('Testando CartApp', () => {
  const contextValue = {
    itemsOnCart: items,
    cartTotalPrice: 14.01,
  };

  describe('Deve possuir', () => {
    it('um container com o data-testid igual a `cart-container`', () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(screen.getByTestId('cart-container')).toBeInTheDocument();
    });
    it('uma div com o data-testid igual a `cart-box`', () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(screen.getByTestId('cart-box')).toBeInTheDocument();
    });
    it('um h1 com o texto `Meu carrinho`', () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(screen.getByRole('heading', { level: 1, name: 'Meu carrinho' })).toBeInTheDocument();
    });
    it('uma ul com o data-testid igual a `cart-items`', () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(screen.getByTestId('cart-items')).toBeInTheDocument();
    });
    it('uma li com o data-testid igual a `cart-item-0`', async () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(await screen.findByTestId('cart-item-0')).toBeInTheDocument();
    });
    it('um h2 com o data-testid igual a `cart-item-title-0', async () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(await screen.findByTestId('cart-item-title-0')).toBeInTheDocument();
    });
    it('uma imagem com o data-testid igual a `cart-item-image-0', async () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(await screen.findByTestId('cart-item-image-0')).toBeInTheDocument();
    });
    it('um texto com o data-testid igual a `cart-item-price-0', async () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(await screen.findByTestId('cart-item-price-0')).toBeInTheDocument();
    });
    it('um texto com o data-testid igual a `cart-item-sellin-price-0', async () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(await screen.findByTestId('cart-item-selling-price-0')).toBeInTheDocument();
    });
    it('um h2 com o data-testid igual a `cart-total-price` e pre??o correto', async () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(await screen.findByTestId('cart-total-price')).toBeInTheDocument();
      expect(await screen.findByTestId('cart-total-price')).toHaveTextContent(
        `Total R$ ${contextValue.cartTotalPrice}`,
      );
    });
    it('um bot??o com o texto igual a `finalizar compra`', () => {
      render(
        <context.Provider value={contextValue}>
          <CartApp />
        </context.Provider>,
      );

      expect(screen.getByRole('button', { name: /finalizar compra/i })).toBeInTheDocument();
    });
    describe('Caso o valor total da compra', () => {
      describe('ultrapasse 10 reais', () => {
        it('deve conter um elemento com o texto `Parab??ns, sua compra tem frete gr??tis !`', async () => {
          contextValue.cartTotalPrice = 25;
          render(
            <context.Provider value={contextValue}>
              <CartApp />
            </context.Provider>,
          );

          expect(await screen.findByTestId('free-delivery-msg')).toBeInTheDocument();
          expect(await screen.findByTestId('free-delivery-msg')).toHaveTextContent('Parab??ns, sua compra tem frete gr??tis !');
        });
      });
      describe('n??o ultrapasse 10 reais', () => {
        it('n??o deve conter um elemento com o texto `Parab??ns, sua compra tem frete gr??tis !`', async () => {
          contextValue.cartTotalPrice = 6;
          render(
            <context.Provider value={contextValue}>
              {' '}
              <CartApp />
            </context.Provider>,
          );

          expect(screen.queryByTestId('free-delivery-msg')).not.toBeInTheDocument();
        });
      });
    });
  });
});
