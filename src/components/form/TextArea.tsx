import {FC} from 'react';

import {InputProps} from './types';

interface Props extends InputProps<string, HTMLTextAreaElement> {
    placeholder: string;
}

export const TextArea: FC<Props> = ({
    value, onChange, onFocus, onBlur, disabled, placeholder
}) => (
    <textarea
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
    />
);
