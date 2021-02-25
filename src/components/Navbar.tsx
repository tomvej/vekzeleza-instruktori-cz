import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import {FC, useState} from 'react';

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
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => setMenuVisible((visible) => !visible);

    return (
        <nav className={style.main}>
            <ResponsiveContainer>
                <div className={style.bar}>
                    <a href={TOP_BOOKMARK}>{brand}</a>
                    <button type="button" aria-label="Menu" className={style.toggle} onClick={toggleMenu}>
                        <FAIcon icon={faBars} />
                    </button>
                    <ul className={classnames(style.menu, {[style.menuVisible]: menuVisible})}>
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
