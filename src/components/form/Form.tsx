import {FC, FormEventHandler} from 'react';

import style from './Form.module.scss';

interface Props {
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export const Form: FC<Props> = ({children, onSubmit}) => (
    <form onSubmit={onSubmit} className={style.main} >{children}</form>
);
