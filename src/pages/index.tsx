import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';
import {Element} from 'react-scroll';

import {ResponsiveContainer, Navbar, Background, Title, renderMarkdown, Summary} from '../components';
import {Footer, PageMeta} from '../containers';

import './style.scss';

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
                links={[
                    {to: 'about', label: 'O akci'},
                    {to: 'info', label: 'Informace'},
                    {to: 'register', label: 'Přihláška'},
                    {to: 'bottom', label: 'Konec'},
                ]}
            />
            <Title>
                <Summary />
            </Title>
            <ResponsiveContainer>
                <section>
                    {renderMarkdown(text!.childMarkdownRemark!.htmlAst!)}
                </section>
                <Element name="bottom" ><h1>A to je vše, přátelé &hellip;</h1></Element>
            </ResponsiveContainer>
            <Footer />
        </Background>
    );
};

export default IndexPage;
