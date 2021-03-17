import classNames from 'classnames';
import {FC} from 'react';

import inputStyle from './Input.module.scss';
import {InputProps} from './types';

interface Props extends InputProps<string, HTMLInputElement> {
    placeholder: string;
}

export const StringInput: FC<Props> = ({
    value, onChange, onBlur, onFocus, disabled, placeholder, invalid
}) => (
    <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(inputStyle.main, {[inputStyle.invalid]: invalid})}
    />
);
