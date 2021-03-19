import {FC} from 'react';
import {Element} from 'react-scroll';

interface Props {
    name: string;
}

export const Section: FC<Props> = ({name, children}) => (
    <section id={name}>
        <Element name={name}>
            {children}
        </Element>
    </section>
);
