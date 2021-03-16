import {FC} from 'react';

import style from './Box.module.scss';

export const Box: FC = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
) ;
