import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {FC, ReactNode} from 'react';

import style from './Summary.module.scss';
import {ScrollLink} from './navbar';

interface Props {
    items: {label: string, value: ReactNode}[]
    actionLabel: string;
    actionTo: string;
}

export const Summary: FC<Props> = ({items, actionLabel, actionTo}) => (
    <div className={style.main}>
        <dl className={style.list}>
            {items.map(({label, value}) => (
                <div key={label} className={style.item}>
                    <dt className={style.label}>{label}</dt>
                    <dd className={style.value}>{value}</dd>
                </div>
            ))}
        </dl>
        <ScrollLink to={actionTo} className={style.action}>
            {actionLabel}
            <FAIcon icon={faArrowRight} className={style.arrow} />
        </ScrollLink>
    </div>
);
