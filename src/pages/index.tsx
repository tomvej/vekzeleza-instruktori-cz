import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {ResponsiveContainer, Navbar, Background, renderMarkdown, Section} from '../components';
import {Title, Footer, PageMeta} from '../containers';

import './style.scss';

const sections: Record<string, {to: string, label: string}> = {
    about: {to: 'about', label: 'O akci'},
    bottom: {to: 'bottom', label: 'Konec'},
};

const IndexPage: FC = () => {
    const {text} = useStaticQuery<GatsbyTypes.LoremIpsumQuery>(graphql`
        query LoremIpsum {
            text: file(relativePath: {eq: "lipsum.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);
    return (
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
                    {renderMarkdown(text!.childMarkdownRemark!.htmlAst!)}
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
};

export default IndexPage;
