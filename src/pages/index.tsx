import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';
import {Element} from 'react-scroll';

import {ResponsiveContainer, Navbar, Background} from '../components';
import {PageMeta} from '../containers';

import './style.scss';

const IndexPage: FC = () => {
    const {text} = useStaticQuery<GatsbyTypes.LoremIpsumQuery>(graphql`
        query LoremIpsum {
            text: file(relativePath: {eq: "lipsum.md"}) {
                childMarkdownRemark {
                    html
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
            <ResponsiveContainer>
                <section dangerouslySetInnerHTML={{__html: text?.childMarkdownRemark?.html ?? ''}} />
                <Element name="bottom" ><h1>A to je vše, přátelé &hellip;</h1></Element>
            </ResponsiveContainer>
        </Background>
    );
};

export default IndexPage;
