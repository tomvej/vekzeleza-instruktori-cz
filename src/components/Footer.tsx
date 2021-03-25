import {FC} from 'react';

import {Centering} from './Centering';
import style from './Footer.module.scss';
import {ResponsiveContainer} from './ResponsiveContainer';

export const Footer: FC = ({children}) => (
    <footer className={style.main}>
        <ResponsiveContainer>
            <Centering>
                {children}
            </Centering>
        </ResponsiveContainer>
    </footer>
);
