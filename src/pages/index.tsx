import {FC} from 'react';

import {Navbar, Background, Section} from '../components';
import {Title, Footer, PageMeta, Info, Register, Epigraph, Contact, About, Faq} from '../containers';

import './style.scss';

const sections: Record<string, {to: string, label: string}> = {
    about: {to: 'about', label: 'O akci'},
    info: {to: 'info', label: 'Informace'},
    register: {to: 'register', label: 'Přihláška'},
    faq: {to: 'faq', label: 'FAQ'},
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
            actionTo={sections.register.to}
            actionLabel="Přihlásit se"
        />
        <Section name={sections.about.to}>
            <Epigraph />
            <About />
        </Section>
        <Section name={sections.info.to}>
            <Info />
        </Section>
        <Section name={sections.register.to}>
            <Register />
        </Section>
        <Section name={sections.faq.to}>
            <Faq />
        </Section>
        <Section name={sections.contact.to}>
            <Contact />
        </Section>
        <Footer />
    </Background>
);

export default IndexPage;
