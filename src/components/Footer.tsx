import {FC} from 'react';

import style from './Footer.module.scss';
import {ResponsiveContainer} from './ResponsiveContainer';

export const Footer: FC = ({children}) => (
    <footer className={style.main}>
        <ResponsiveContainer>
            <div className={style.center}>
            {children}
            </div>
        </ResponsiveContainer>
    </footer>
);
