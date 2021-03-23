import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {FC, ReactNode} from 'react';

import {DropdownAnimation} from '../DropdownAnimation';

import {useFaqContext} from './FaqContext';
import style from './FaqItem.module.scss';

interface Props {
    id: number;
    title: ReactNode;
}

export const FaqItem: FC<Props> = ({id, title, children}) => {
    const [expanded, toggleExpanded] = useFaqContext(id);

    return (
        <>
            <dt className={classNames(style.title, {[style.expanded]: expanded})}>
                <button
                    type="button"
                    onClick={toggleExpanded}
                    className={style.toggle}
                >
                    {title}
                    <FAIcon icon={faAngleDown} className={style.icon} />
                </button>
            </dt>
            <DropdownAnimation
                visible={expanded}
                tag="dd"
                className={style.item}
            >
                {children}
            </DropdownAnimation>
        </>
    );
};
