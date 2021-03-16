import {FC} from 'react';

import style from './TwoColumn.module.scss';

export const TwoColumn: FC = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);
