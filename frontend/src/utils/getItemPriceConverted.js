const getItemPriceConverted = (itemPrice) => {
  const finalPrice = itemPrice / 100;
  return finalPrice;
};

export default getItemPriceConverted;
