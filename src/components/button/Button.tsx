import {FC, MouseEventHandler} from 'react';

import {className} from './style';

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    outline?: boolean;
}

export const Button: FC<Props> = ({
    onClick,
    children,
    disabled = false,
    outline = false,
}) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={className(outline)}
    >
        {children}
    </button>
);
