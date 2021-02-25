import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {FC} from 'react';

import style from './Navbar.module.scss';
import {ResponsiveContainer} from './ResponsiveContainer';
import {TOP_BOOKMARK} from './constants';


interface NavLinkProps {
    to: string;
    label: string;
}

interface Props {
    brand: string;
    links: NavLinkProps[];
}

export const Navbar : FC<Props> = ({brand, links}) => {

    return (
        <nav className={style.main}>
            <ResponsiveContainer>
                <div className={style.bar}>
                    <a href={TOP_BOOKMARK}>{brand}</a>
                    <button type="button" aria-label="Menu" className={style.toggle}>
                        <FAIcon icon={faBars} />
                    </button>
                    <ul className={style.menu}>
                        {links.map(({to, label}) => (
                            <li key={to}>
                                <a href={`#${to}`}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </ResponsiveContainer>
        </nav>
    );
};
