import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {renderMarkdown, Epigraph as EpigraphComponent, ResponsiveContainer} from '../components';

export const Epigraph: FC = () => {
    const {text} = useStaticQuery<GatsbyTypes.EpigraphQuery>(graphql`
        query Epigraph {
            text: file(relativePath: {eq: "epigraph.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    return (
        <ResponsiveContainer>
            <EpigraphComponent>
                {renderMarkdown(text!.childMarkdownRemark!.htmlAst)}
            </EpigraphComponent>
        </ResponsiveContainer>
    );
};
