//shuffle array order
const shuffle = (arr) => {
  const newArr = [...arr];
  return newArr.sort(() => Math.random() - 0.5);
};

export const shuffledImages = (list) => {
  /* shuffle the list and slice the first six images 
  to get different images every time a game is started */
  const shortList = shuffle(list).slice(0, 6);
  //duplicates the images
  const duplicates = [...shortList, ...shortList];
  //returns the new shuffle list
  return shuffle(duplicates);
};