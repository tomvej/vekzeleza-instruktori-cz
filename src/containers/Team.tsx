import {graphql, useStaticQuery} from 'gatsby';
import {FC, useState} from 'react';

import {renderMarkdown, ResponsiveContainer, TeamMember, TeamMemberShowcase, TeamShowcase} from '../components';

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
                        portrait {
                            childImageSharp {
                                fluid(maxWidth: 200) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    htmlAst
                }
            }
        }
    `);
    const [activeMember, setActiveMember] = useState<string>(null);

    return (
        <ResponsiveContainer>
            <h1>Kdo to pořádá</h1>
            <TeamShowcase>
                {team.nodes.map(({frontmatter}) => (
                    <TeamMemberShowcase
                        key={frontmatter!.name!}
                        name={frontmatter!.name!}
                        image={frontmatter!.portrait!.childImageSharp!.fluid!}
                        onActivate={() => setActiveMember(frontmatter!.name!)}
                        active={activeMember === frontmatter!.name!}
                    />
                ))}
            </TeamShowcase>
            {team.nodes.map(({frontmatter, htmlAst}) => (
                <TeamMember
                    key={frontmatter!.name!}
                    name={frontmatter!.name!}
                    image={frontmatter!.portrait!.childImageSharp!.fluid!}
                    active={activeMember === frontmatter!.name!}
                >
                    {renderMarkdown(htmlAst!)}
                </TeamMember>
            ))}
        </ResponsiveContainer>
    );
};
