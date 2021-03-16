import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {renderMarkdown} from '../components';

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
        <>
            {renderMarkdown(text!.childMarkdownRemark!.htmlAst)}
        </>
    );
};
