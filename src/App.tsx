import { CompletedRow, CurrentRow, EmptyRow } from './components';
import { useWordle } from './hooks/useWordle';
import { GameStatus } from './types';
import './App.css';

export function App() {
    const { 
        wordOftheDay,
        currentWord,
        completeWords,
        turn,
        gameStatus, 
    } = useWordle();

    return (
        <main>
            {completeWords.map((word, index) => 
                <CompletedRow 
                    key={index} 
                    word={word} 
                    solution={wordOftheDay} 
                />
            )}
            {gameStatus === GameStatus.Playing 
                ? <CurrentRow word={currentWord} /> 
                : null}
            {Array.from(Array(6 - turn)).map((_, index) => 
                <EmptyRow key={index} />
            )}
        </main>
    );
}
