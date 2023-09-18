import { WORDS } from './../utils/const';

function getWords() {
    return WORDS;
}

export function getWord() {
    const word = getWordRandom();
    return word.toUpperCase();
}

export function isValidWord(word: string) {
    const words = getWords();
    return words.includes(word.toLowerCase());
}

function getWordRandom() {
    const words = getWords();
    const wordRandom = words[Math.floor((Math.random() * ((words.length - 1) - 0 + 1)) + 0)];
    return wordRandom;
}

