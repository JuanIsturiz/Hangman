const english = require("an-array-of-english-words");
const spanish = require("an-array-of-spanish-words");

interface Langs {
  spanish: string[];
  english: string[];
}

const languages: Langs = {
  english,
  spanish,
};

export const getRandomWord = (lang: string) => {
  const selected: string[] = languages[lang as keyof Langs];
  const filtered = selected.filter(
    (word: string) => word.length > 5 && word.length < 11
  );
  return filtered[Math.floor(Math.random() * filtered.length)];
};
