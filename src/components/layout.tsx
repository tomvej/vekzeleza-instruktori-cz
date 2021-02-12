/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import {useStaticQuery, graphql} from 'gatsby';
import {FC} from 'react';

import Header from './header';
import './layout.css';

const Layout: FC = ({children}) => {
    const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site?.siteMetadata?.title || 'Title'} />
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: '2rem',
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    );
};

export default Layout;
