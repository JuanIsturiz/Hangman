const words = require("an-array-of-english-words");

export const getRandomWord = () => {
  const filtered = words.filter(
    (word: string) => word.length > 5 && word.length < 11
  );
  return filtered[Math.floor(Math.random() * filtered.length)];
};
