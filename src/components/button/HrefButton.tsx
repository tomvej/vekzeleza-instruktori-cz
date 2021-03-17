import {FC} from 'react';

import {ScrollLink} from '../navbar';

import {className} from './style';

interface Props {
    href: string;
    outline?: boolean;
}

export const HrefButton: FC<Props> = ({href, children, outline = false}) => {
    if (href.startsWith('#')) {
        return <ScrollLink to={href} className={className(outline)}>{children}</ScrollLink>;
    } else {
        return <a href={href} className={className(outline)}>{children}</a>;
    }
};
