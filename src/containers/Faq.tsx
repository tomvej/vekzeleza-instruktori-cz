import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {
    FaqContainer,
    FaqItem,
    Image,
    renderMarkdown,
    renderNodes,
    ResponsiveContainer,
    splitHeading,
    splitIntoSections,
} from '../components';

export const Faq: FC = () => {
    const {text, image} = useStaticQuery<GatsbyTypes.FaqQuery>(graphql`
        query Faq {
            text: file(relativePath: {eq: "faq.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
            image: file(relativePath: {eq: "oběd.jpg"}) {
                childImageSharp {
                    fluid (maxWidth: 1920, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const {heading, nodes} = splitHeading(text.childMarkdownRemark!.htmlAst!);
    const {preface, sections } = splitIntoSections(nodes, 2);

    return (
        <ResponsiveContainer narrow>
            {heading && renderMarkdown(heading)}
            {renderNodes(renderMarkdown, preface)}
            <FaqContainer>
                {sections.map(({heading, children}, index) => (
                    <FaqItem key={index} id={index} title={renderNodes(renderMarkdown, heading.children)}>
                        {renderNodes(renderMarkdown, children)}
                    </FaqItem>
                ))}
            </FaqContainer>
            <Image src={image!.childImageSharp!.fluid!} />
        </ResponsiveContainer>
    );
};
