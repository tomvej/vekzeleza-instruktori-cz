import classNames from 'classnames';
import {FC} from 'react';

import inputStyle from './Input.module.scss';
import style from './TextArea.module.scss';
import {InputProps} from './types';

interface Props extends InputProps<string, HTMLTextAreaElement> {
    placeholder: string;
}

export const TextArea: FC<Props> = ({
    value, onChange, onFocus, onBlur, disabled, placeholder, invalid
}) => (
    <textarea
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(inputStyle.main, style.main, {[inputStyle.invalid]: invalid})}
    />
);
