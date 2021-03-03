import {FC} from 'react';
import {Link, LinkProps} from 'react-scroll';

import {useNavbarContext} from './NavbarContext';

type Props = Omit<LinkProps, 'ref'>;

export const ScrollLink: FC<Props> = ({to, ...props}) => {
    const {height} = useNavbarContext();
    return (
        <Link
            to={to}
            href={`#${to}`}
            {...props}
            offset={-height}
            smooth
        />
    );
};


