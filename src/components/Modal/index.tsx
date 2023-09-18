import { Square } from './..';
import styles from './modal.module.scss';

interface Props {
    type: 'won' | 'lost'
    completedWords: string[]
    solution: string
    onReset: () => void
}

export function Modal({ type, completedWords, solution, onReset }: Props) {

    const handlerOnClickReset = () => onReset();

    return (
        <div className={styles.modalViewContainer}>
            <div className={styles.modalContainer}>
                <h2>You {type === 'won' ? "won!" : "lost"}</h2>
                <div className={styles.puzzle}>
                    {completedWords.map((word, index) => 
                        <Square 
                            key={index} 
                            word={word} 
                            solution={solution} 
                        />)}
                </div>
                <div className={styles.resetContainer}>
                    <button 
                        className={styles.reset}
                        onClick={handlerOnClickReset}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
