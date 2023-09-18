import { Box } from './../..';
import styles from './../row.module.scss';

export function EmptyRow() {

    const boxes = Array.from(Array(5));

    return (
        <section className={styles.row}>
            {boxes.map((_, index) => 
                <Box 
                    key={index} 
                    value='' 
                    status='empty' 
                />
            )}
        </section>
    );
}
