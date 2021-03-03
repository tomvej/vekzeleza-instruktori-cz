import {FC} from 'react';

import {InputProps} from './types';

interface Props extends InputProps<string, HTMLInputElement> {
    placeholder: string;
}

export const StringInput: FC<Props> = ({
    value, onChange, onBlur, onFocus, disabled, placeholder
}) => (
    <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
    />
);
