import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {
    Image,
    renderMarkdown,
    renderNodes,
    ResponsiveContainer,
    splitHeading,
    splitIntoSections,
    TwoColumn, Unbreakable,
} from '../components';

export const Info: FC = () => {
    const {text, image} = useStaticQuery<GatsbyTypes.InfoQuery>(graphql`
        query Info {
            text: file(relativePath: {eq: "info.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
            image: file(relativePath: {eq: "zpráva.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const {heading, nodes} = splitHeading(text!.childMarkdownRemark!.htmlAst!);
    const {preface, sections} = splitIntoSections(nodes, 2);

    return (
        <>
            <ResponsiveContainer>
                {heading && renderMarkdown(heading)}
                <TwoColumn>
                    {renderNodes(renderMarkdown, preface)}
                    {sections.map(({heading, children}, index) => (
                        <Unbreakable key={index}>
                            {renderNodes(renderMarkdown, [heading].concat(children))}
                        </Unbreakable>)
                    )}
                </TwoColumn>
            </ResponsiveContainer>
            <ResponsiveContainer narrow>
                <Image src={image!.childImageSharp!.fluid!} />
            </ResponsiveContainer>
        </>
    );
};
