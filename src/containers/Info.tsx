import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {renderMarkdown, renderNodes, ResponsiveContainer, splitHeading, TwoColumn} from '../components';

export const Info: FC = () => {
    const {text} = useStaticQuery<GatsbyTypes.InfoQuery>(graphql`
        query Info {
            text: file(relativePath: {eq: "info.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    const {heading, nodes} = splitHeading(text!.childMarkdownRemark!.htmlAst);

    return (
        <ResponsiveContainer>
            {heading && renderMarkdown(heading)}
            <TwoColumn>
                {renderNodes(renderMarkdown, nodes)}
            </TwoColumn>
        </ResponsiveContainer>
    );
};
