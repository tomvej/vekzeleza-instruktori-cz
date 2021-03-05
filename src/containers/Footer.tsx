import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {Footer as FooterComponent} from '../components';

export const Footer: FC = () => {
    const {site, text} = useStaticQuery<GatsbyTypes.FooterQuery>(graphql`
        query Footer {
            site {
                siteMetadata {
                    author
                    year
                }
            }
            text: file(relativePath: {eq: "footer.md"}) {
                childMarkdownRemark {
                    html
                }
            }
        }
    `);

    return (
        <FooterComponent>
            <div dangerouslySetInnerHTML={{__html: text!.childMarkdownRemark!.html}} />
            <p>Copyright &copy; {site!.siteMetadata!.author} {site!.siteMetadata!.year}</p>
        </FooterComponent>
    )
};
