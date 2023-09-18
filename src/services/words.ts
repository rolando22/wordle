import { WORDS } from './../utils/const';

function getWords() {
    return WORDS;
}

export function getWordOfTheDay() {
    const words = getWords();
    const wordOfTheDay = words[getDayOfTheYear()];
    return wordOfTheDay.toUpperCase();
}

export function isValidWord(word: string) {
    const words = getWords();
    return words.includes(word.toLowerCase());
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function getDayOfTheYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff =
    (now as any) -
    (start as any) +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

