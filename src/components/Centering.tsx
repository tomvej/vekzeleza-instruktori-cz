import {FC} from 'react';

import style from './Centering.module.scss';

export const Centering: FC = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);
