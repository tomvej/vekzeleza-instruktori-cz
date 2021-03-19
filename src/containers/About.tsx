import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {
    createMarkdownRenderer,
    ListSpread,
    renderNodes,
    ResponsiveContainer,
    splitHeading, TextGallery,
} from '../components';

const renderMarkdown = createMarkdownRenderer({'p': 'li'});

export const About: FC = () => {
    const {text, img1, img2, img3} = useStaticQuery<GatsbyTypes.AboutQuery>(graphql`
        query About {
            text: file (relativePath: {eq: "about.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
            img1: file(relativePath: {eq: "kryštof.jpg"}) {
                childImageSharp {
                    fluid (quality: 90, maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            img2: file(relativePath: {eq: "šerm.jpg"}) {
                childImageSharp {
                    fluid (quality: 90, maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            img3: file(relativePath: {eq: "pohřeb.jpg"}) {
                childImageSharp {
                    fluid (quality: 90, maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const {heading, nodes} = splitHeading(text!.childMarkdownRemark!.htmlAst!);
    const third = Math.ceil(nodes.length / 3);

    return (
        <ResponsiveContainer>
            {heading && renderMarkdown(heading)}
            <TextGallery image={img1!.childImageSharp!.fluid!}>
                <ListSpread>
                    {renderNodes(renderMarkdown, nodes.slice(0, third))}
                </ListSpread>
            </TextGallery>
            <TextGallery image={img2!.childImageSharp!.fluid!} alternate>
                <ListSpread>
                    {renderNodes(renderMarkdown, nodes.slice(third, 2 * third))}
                </ListSpread>
            </TextGallery>
            <TextGallery image={img3!.childImageSharp!.fluid!}>
                <ListSpread>
                    {renderNodes(renderMarkdown, nodes.slice(2 * third))}
                </ListSpread>
            </TextGallery>

        </ResponsiveContainer>
    );
};
