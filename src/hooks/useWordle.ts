import { useEffect, useState } from "react";
import { getWord, isValidWord } from "../services/words";
import { GameStatus } from "../types";
import { KEYS } from "../utils/const";

export function useWordle() {
    const [wordOftheDay, setWordOfTheDay] = useState('');
    const [turn, setTurn] = useState(1);
    const [currentWord, setCurrentWord] = useState('');
    const [completeWords, setCompletedWords] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

    useEffect(() => {
        setWordOfTheDay(getWord());
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });


    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key.toUpperCase();
        onKeyPressed(key);
    };

    const onKeyPressed = (key: string) => {
        if (gameStatus !== GameStatus.Playing) return;

        if (key === 'BACKSPACE' && currentWord.length > 0) {
            onDelete();
            return;
        }

        if (key === 'ENTER' && currentWord.length === 5 && turn <= 6) {
            onEnter();
            return;
        }

        if (currentWord.length >= 5) return;

        if (KEYS.includes(key)) {
            onInput(key);
            return;
        }
    };

    const onInput = (letter: string) => {
        const newWord = `${currentWord}${letter}`;
        setCurrentWord(newWord);
    };

    const onDelete = () => {
        const newWord = currentWord.slice(0, -1);
        setCurrentWord(newWord);
    };

    const onEnter = () => {
        if (currentWord === wordOftheDay) {
            setCompletedWords([...completeWords, currentWord]);
            setGameStatus(GameStatus.Won);
            return
        }

        if (turn === 6) {
            setCompletedWords([...completeWords, currentWord]);
            setGameStatus(GameStatus.Lost);
            return;
        }

        const validWord = isValidWord(currentWord);
        if (currentWord.length === 5 && !validWord) {
            alert('Not a valid word');
            return;
        }

        setCompletedWords([...completeWords, currentWord]);
        setTurn(turn + 1);
        setCurrentWord('');
    };

    return {
        wordOftheDay,
        currentWord,
        completeWords,
        turn,
        gameStatus,
        onKeyPressed, 
    };
}
