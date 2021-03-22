import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {FC, ReactNode} from 'react';

import {DropdownAnimation} from '../DropdownAnimation';

import {useFaqContext} from './FaqContext';

interface Props {
    id: number;
    title: ReactNode;
}

export const FaqItem: FC<Props> = ({id, title, children}) => {
    const [active, toggleExpanded] = useFaqContext(id);

    return (
        <>
            <dt>
                <button
                    type="button"
                    onClick={toggleExpanded}
                >
                    {title}
                    <FAIcon icon={faAngleDown} />
                </button>
            </dt>
            <DropdownAnimation
                visible={active}
                tag="dd"
            >
                {children}
            </DropdownAnimation>
        </>
    );
};
