import {FC} from 'react';

import style from './TeamShowcase.module.scss';

export const TeamShowcase: FC = ({children}) => (
    <div className={style.main}>
        {children}
    </div>
);
