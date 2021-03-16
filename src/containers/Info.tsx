import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {renderMarkdown, ResponsiveContainer} from '../components';

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

    return (
        <ResponsiveContainer>
            {renderMarkdown(text!.childMarkdownRemark!.htmlAst)}
        </ResponsiveContainer>
    );
};
