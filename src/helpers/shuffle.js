//shuffle array order
export const shuffle = (arr) => {
  const newArr = [...arr];
  return newArr.sort(() => Math.random() - 0.5);
};
