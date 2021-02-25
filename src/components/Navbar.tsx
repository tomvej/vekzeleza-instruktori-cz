import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import {FC, useCallback, useEffect, useState} from 'react';

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
    const [menuHeight, setMenuHeight] = useState(0);
    const updateMenuRef = useCallback((el: HTMLUListElement) => el && setMenuHeight(el.scrollHeight) , [setMenuHeight]);

    const [landing, setLanding] = useState(false);
    useEffect(() => {
        const onScroll = () => setLanding(window.scrollY === 0);
        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, [setLanding]);

    return (
        <nav className={classnames(style.main, {[style.landing]: landing})}>
            <ResponsiveContainer>
                <div className={style.bar}>
                    <a href={TOP_BOOKMARK}>{brand}</a>
                    <button type="button" aria-label="Menu" className={style.toggle} onClick={toggleMenu}>
                        <FAIcon icon={faBars} />
                    </button>
                    <ul
                        className={classnames(style.menu, {[style.menuVisible]: menuVisible})}
                        ref={updateMenuRef}
                        style={menuVisible ? {maxHeight: menuHeight} : {}}
                    >
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
