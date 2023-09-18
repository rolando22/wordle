import { CompletedRow, CurrentRow, EmptyRow, Keyboard, Modal } from './components';
import { useWordle } from './hooks/useWordle';
import { GameStatus } from './types';
import styles from  './App.module.scss';

export function App() {
    const { 
        wordOftheDay,
        currentWord,
        completeWords,
        turn,
        gameStatus, 
        onKeyPressed, 
        onReset, 
    } = useWordle();

    return (
        <>
            {gameStatus === GameStatus.Won 
                ? <Modal 
                    type='won' 
                    completedWords={completeWords} 
                    solution={wordOftheDay} 
                    onReset={onReset}
                />
                : gameStatus === GameStatus.Lost 
                    ? <Modal 
                        type='lost' 
                        completedWords={completeWords} 
                        solution={wordOftheDay} 
                        onReset={onReset} 
                    />
                    : null}
            <main className={styles.mainContainer}>
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
                <Keyboard onKeyPressed={onKeyPressed}/>
            </main>
        </>
    );
}
