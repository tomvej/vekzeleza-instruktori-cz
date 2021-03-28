import {OutboundLink} from 'gatsby-plugin-google-gtag';
import {FC} from 'react';

import {ScrollLink} from './navbar';

interface Props {
    href?: string;
}

export const MarkdownLink: FC<Props> = ({href, children}) => href && href.startsWith('#')
    ? <ScrollLink to={href.substring(1)}>{children}</ScrollLink>
    : <OutboundLink href={href}>{children}</OutboundLink>;
