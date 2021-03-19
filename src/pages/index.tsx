import {FC} from 'react';

import {Navbar, Background, Section} from '../components';
import {Title, Footer, PageMeta, Info, Register, Epigraph, Contact} from '../containers';

import './style.scss';

const sections: Record<string, {to: string, label: string}> = {
    about: {to: 'about', label: 'O akci'},
    info: {to: 'info', label: 'Informace'},
    register: {to: 'register', label: 'Přihláška'},
    contact: {to: 'contact', label: 'Kontakt'},
};

const IndexPage: FC = () => (
    <Background>
        <PageMeta />
        <Navbar
            brand="Věk železa"
            links={Object.values(sections)}
        />
        <Title
            actionTo={sections.about.to}
            actionLabel="Více"
        />
        <Section name={sections.about.to}>
            <Epigraph />
        </Section>
        <Section name={sections.info.to}>
            <Info />
        </Section>
        <Section name={sections.register.to}>
            <Register />
        </Section>
        <Section name={sections.contact.to}>
            <Contact />
        </Section>
        <Footer />
    </Background>
);

export default IndexPage;
