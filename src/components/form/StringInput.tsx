import {FC} from 'react';

import {InputProps} from './types';

export const StringInput: FC<InputProps<string, HTMLInputElement>> = ({value, onChange}) => (
    <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
    />
);
