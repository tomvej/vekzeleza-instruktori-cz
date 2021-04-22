import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {renderMarkdown, ResponsiveContainer} from '../components';

export const Team: FC = () => {
    const {team} = useStaticQuery<GatsbyTypes.TeamQuery>(graphql`
        query Team {
            team: allMarkdownRemark(filter: {
                fileAbsolutePath: {glob: "**/team/*.md"}
                frontmatter: {order: {gt: 0}}
            }, sort: {fields: [frontmatter___order]} ) {
                nodes {
                    frontmatter {
                        name
                    }
                    htmlAst
                }
            }
        }
    `);

    return (
        <ResponsiveContainer>
            <h1>Kdo to pořádá</h1>
            {team.nodes.map(({frontmatter, htmlAst}) => (
                <>
                    <h2>{frontmatter!.name}</h2>
                    {renderMarkdown(htmlAst!)}
                </>
            ))}
        </ResponsiveContainer>
    );
};
