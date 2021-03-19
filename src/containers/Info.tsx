import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {Image, renderMarkdown, renderNodes, ResponsiveContainer, splitHeading, TwoColumn} from '../components';

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

    return (
        <>
            <ResponsiveContainer>
                {heading && renderMarkdown(heading)}
                <TwoColumn>
                    {renderNodes(renderMarkdown, nodes)}
                </TwoColumn>
            </ResponsiveContainer>
            <ResponsiveContainer narrow>
                <Image src={image!.childImageSharp!.fluid!} />
            </ResponsiveContainer>
        </>
    );
};
