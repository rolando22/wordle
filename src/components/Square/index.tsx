import styles from './square.module.scss';

interface Props {
    word: string
    solution: string
}

export function Square({ word, solution }: Props) {
    const checkLetter = (letter: string, pos: number): string => {
        if (solution.includes(letter)) {
            if (solution[pos] === letter) {
                return "🟩";
            } else {
                return "🟨";
            }
        } else {
            return "⬛";
        }
      }

    return (
        <div className={styles.puzzleWord}>
            {word.split('').map((letter, index) => 
                <div key={index}>
                    {checkLetter(letter, index)}
                </div>
            )}
        </div>
    );
}
