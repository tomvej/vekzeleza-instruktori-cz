import {FC} from 'react';
import {Link, LinkProps} from 'react-scroll';

type Props = Omit<LinkProps, 'ref'>;

export const ScrollLink: FC<Props> = ({to, ...props}) => (
    <Link
        to={to}
        href={`#${to}`}
        {...props}
        smooth
    />
);


