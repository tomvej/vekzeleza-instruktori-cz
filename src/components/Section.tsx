import {FC} from 'react';
import {Element} from 'react-scroll';

import style from './Section.module.scss';

interface Props {
    name: string;
}

export const Section: FC<Props> = ({name, children}) => (
    <section id={name}>
        <Element name={name} className={style.main}>
            {children}
        </Element>
    </section>
);
