import classNames from 'classnames/bind';
import { BoxStatus } from '../../types';
import styles from './box.module.scss';

interface Props {
    value: string
    status: BoxStatus
}

const classes = classNames.bind(styles);

export function Box({ value, status }: Props) {

    const boxStatus = classes({
        correct: status === 'correct',
        present: status === 'present',
        absent: status === 'absent',
        empty: status === 'empty',
        edit: status === 'edit',
    });

    return (
        <div className={boxStatus}>{value}</div>
    );
}
