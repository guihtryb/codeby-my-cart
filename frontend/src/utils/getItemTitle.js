const getItemTitle = (title) => {
  const firstStr = title[0].toUpperCase();
  const othersStr = title.slice(1, title.length).toLowerCase();
  const captalized = othersStr.includes('de')
    ? firstStr + othersStr : (firstStr + othersStr).replace(' ', ' de ');

  return captalized;
};

export default getItemTitle;
