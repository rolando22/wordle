import { Box } from './../..';
import styles from './../row.module.scss';

interface Props {
    word: string
}

export function CurrentRow({ word }: Props) {

    const wordArray = word.split('');
    const boxes = Array.from(Array(5 - wordArray.length));

    return (
        <section className={styles.row}>
            {wordArray.map((letter, index) => 
                <Box 
                    key={index} 
                    value={letter} 
                    status='edit' 
                />
            )}
            {boxes.map((_, index) => 
                <Box 
                    key={index + wordArray.length} 
                    value='' 
                    status='edit' 
                />
            )}
        </section>
    );
}
