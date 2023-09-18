import { KEYS } from '../../utils/const';
import styles from './keyboard.module.scss';

interface Props {
    onKeyPressed: (key: string) => void
}

export function Keyboard({ onKeyPressed }: Props) {

    const handleInput = (key: string) => () => onKeyPressed(key);
    const handleEnter = () => onKeyPressed('ENTER');
    const handleDelete = () => onKeyPressed('BACKSPACE');

    return (
        <section className={styles.keyboarContainer}>
            {Array.from(Array(10)).map((_, index) => 
                <button 
                    key={index}
                    className={styles.key}
                    onClick={handleInput(KEYS[index])}
                >
                    {KEYS[index]}
                </button>
            )}
            {Array.from(Array(9)).map((_, index) => 
                <button 
                    key={index + 10}
                    className={styles.key}
                    onClick={handleInput(KEYS[index + 10])}
                >
                    {KEYS[index + 10]}
                </button>
            )}
            <button 
                className={styles.enterKey}
                onClick={handleEnter}
            >
                ENTER
            </button>
            {Array.from(Array(7)).map((_, index) => 
                <button 
                    key={index + 19}
                    className={styles.key}
                    onClick={handleInput(KEYS[index + 19])}
                >
                    {KEYS[index + 19]}
                </button>
            )}
            <button 
                className={styles.deleteKey}
                onClick={handleDelete}
            >
                DELETE
            </button>
        </section>
    );
}
