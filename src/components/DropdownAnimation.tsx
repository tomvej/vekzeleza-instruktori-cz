import classNames from 'classnames';
import {FC, useCallback, useState} from 'react';

import style from './DropdownAnimation.module.scss';

interface Props {
    tag?: 'div' | 'dd' | 'ul';
    visible?: boolean;
    className?: string;
}

export const DropdownAnimation: FC<Props> = ({
    tag: Tag = 'div',
    children,
    visible = true,
    className,
}) => {
    const [maxHeight, setMaxHeight] = useState(0);
    const updateRef = useCallback((el: HTMLElement | null) => el && setMaxHeight(el.scrollHeight), [setMaxHeight]);

    return (
        <Tag
            ref={updateRef}
            style={{maxHeight: visible ? maxHeight : 0}}
            className={classNames(style.main, className)}
        >
            {children}
        </Tag>
    );
};
