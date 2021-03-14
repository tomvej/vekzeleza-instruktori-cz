import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {FC, ReactNode} from 'react';

import style from './Summary.module.scss';
import {ScrollLink} from './navbar';


const info: {label: string, value: ReactNode}[] = [
    {label: 'Věk', value: '15\u201325'},
    {label: 'Termín', value: '13.\u201322.\u00A08.\u00A02021'},
    {label: 'Cena', value: '3000\u00A0Kč'},
];

export const Summary: FC = () => (
    <dl className={style.main}>
        {info.map(({label, value}) => (
            <div key={label} className={style.item}>
                <dt className={style.label}>{label}</dt>
                <dd className={style.value}>{value}</dd>
            </div>
        ))}
        <ScrollLink to="register" className={style.action}>
            Přihlásit se
            <FAIcon icon={faArrowRight} className={style.arrow} />
        </ScrollLink>
    </dl>
);
