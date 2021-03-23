import {FC} from 'react';

import style from './Alert.module.scss';

export const Alert: FC = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);
