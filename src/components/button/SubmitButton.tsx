import {FC} from 'react';

import {className} from './style';

interface Props {
    disabled?: boolean;
    outline?: boolean;
}

export const SubmitButton: FC<Props> = ({children, disabled = false, outline = false}) => (
    <button
        type="submit"
        disabled={disabled}
        className={className(outline)}
    >
        {children}
    </button>
);
