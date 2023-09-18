import { WORDS } from './../utils/const';

function getWords() {
    return WORDS;
}

export function getWord() {
    const word = getWordRandom();
    return word.toUpperCase();
}

export async function isValidWord(word: string) {
    try {
        const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(URL);
        if (response.status !== 200) throw new Error("Request Failed");
        const json = await response.json();
        return json.length;
      } catch (e) {
        console.log(e);
        return false;
      }
    // const words = getWords();
    // return words.includes(word.toLowerCase());
}

function getWordRandom() {
    const words = getWords();
    const wordRandom = words[Math.floor((Math.random() * ((words.length - 1) - 0 + 1)) + 0)];
    return wordRandom;
}

