import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import {FC, useCallback, useEffect, useState} from 'react';
import {animateScroll} from 'react-scroll';

import {pageView} from '../../utils';
import {ResponsiveContainer} from '../ResponsiveContainer';

import style from './Navbar.module.scss';
import {useNavbarContext} from './NavbarContext';
import {ScrollLink} from './ScrollLink';


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

    const {setHeight: setNavbarHeight} = useNavbarContext();
    const updateNavbarRef = useCallback((el: HTMLElement) => el && setNavbarHeight(el.offsetHeight), [setNavbarHeight]);

    return (
        <nav className={classnames(style.main, {[style.landing]: landing})} ref={updateNavbarRef}>
            <ResponsiveContainer>
                <div className={style.bar}>
                    <div>
                        <a
                            href="#"
                            className={style.link}
                            onClick={(event) => {
                                event.preventDefault();
                                animateScroll.scrollToTop();
                            }}
                        >
                            {brand}
                        </a>
                    </div>
                    <button type="button" aria-label="Menu" className={style.toggle} onClick={toggleMenu}>
                        <FAIcon icon={faBars} />
                    </button>
                    <ul
                        className={classnames(style.menu, {[style.menuVisible]: menuVisible})}
                        ref={updateMenuRef}
                        style={menuVisible ? {maxHeight: menuHeight} : {}}
                    >
                        {links.map(({to, label}) => (
                            <li key={to} className={style.menuItem}>
                                <ScrollLink
                                    to={to}
                                    spy
                                    hashSpy
                                    className={style.link}
                                    activeClass={style.activeLink}
                                    onSetActive={() => pageView(label, to)}
                                >
                                    {label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </ResponsiveContainer>
        </nav>
    );
};
