import classNames from 'classnames';
import {FC, useLayoutEffect, useRef, useState} from 'react';

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
    const ref = useRef<HTMLElement | null>(null);
    const updateRef = (el: HTMLElement | null) => {
        ref.current = el;
    };
    useLayoutEffect(() => {
        if (ref.current && visible) {
            setMaxHeight(ref.current.scrollHeight);
        }
    }, [visible]);

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
