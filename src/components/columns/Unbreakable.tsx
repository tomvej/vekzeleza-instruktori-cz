import {FC} from 'react';

import style from './Unbreakable.module.scss';

export const Unbreakable: FC = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);
