import {FC} from 'react';

import {ResponsiveContainer, Navbar, Background, Section} from '../components';
import {Title, Footer, PageMeta, Info} from '../containers';

import './style.scss';

const sections: Record<string, {to: string, label: string}> = {
    about: {to: 'about', label: 'O akci'},
    info: {to: 'info', label: 'Informace'},
    bottom: {to: 'bottom', label: 'Konec'},
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

            <ResponsiveContainer>
                <h1>Co všechno můžeš zažít</h1>
            </ResponsiveContainer>
        </Section>
        <Section name={sections.info.to}>
            <ResponsiveContainer>
                <Info />
            </ResponsiveContainer>
        </Section>
        <Section name={sections.bottom.to}>
            <ResponsiveContainer>
                <h1>A to je vše, přátelé &hellip;</h1>
            </ResponsiveContainer>
        </Section>
        <Footer />
    </Background>
);

export default IndexPage;
