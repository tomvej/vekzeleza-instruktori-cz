import {FC} from 'react';

import style from './ListSpread.module.scss';

export const ListSpread: FC = ({children}) => (
    <ul className={style.main}>
        {children}
    </ul>
);
