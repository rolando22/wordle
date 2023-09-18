import { Box } from '../..';
import { type BoxStatus } from '../../../types';
import styles from './../row.module.scss';

interface Props {
    word: string
    solution: string
}

export function CompletedRow({ word, solution }: Props) {

    const boxes = Array.from(Array(5));

    const checkLetter = (letter: string, pos: number): BoxStatus => {
        if (solution.includes(letter)) {
            if (solution[pos] === letter) {
                return 'correct';
            } else {
                return 'present';
            }
        } else {
            return 'absent';
        }
    }

    return (
        <section className={styles.row}>
            {boxes.map((_, index) => 
                <Box 
                    key={index}
                    value={word[index]}
                    status={checkLetter(word[index], index)}
                />
            )}
        </section>
    );
}
