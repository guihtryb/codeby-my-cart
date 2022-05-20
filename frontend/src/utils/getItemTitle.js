const getItemTitle = (title) => {
  const firstStr = title[0].toUpperCase();
  const othersStr = title.slice(1, title.length).toLowerCase();
  const captalized = firstStr + othersStr;

  return captalized;
};

export default getItemTitle;
