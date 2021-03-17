import {FC} from 'react';

import style from './FormRow.module.scss';

export const FormRow: FC = ({children}) => (
    <div className={style.main}>{children}</div>
);
