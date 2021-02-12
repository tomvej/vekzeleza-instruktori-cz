/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import {graphql, useStaticQuery} from 'gatsby';
import {DetailedHTMLProps, FC, MetaHTMLAttributes} from 'react';
import {Helmet} from 'react-helmet';

interface Props {
    description?: string;
    lang?: string;
    meta?: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[];
    title: string;
}

const SEO: FC<Props> = ({description = '', lang = 'en', meta = [], title}) => {
    const {site} = useStaticQuery<GatsbyTypes.SiteMetaQueryQuery>(
        graphql`
            query SiteMetaQuery {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const metaDescription = description || site?.siteMetadata?.description;
    const defaultTitle = site?.siteMetadata?.title;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
            meta={meta.concat([
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site?.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ])}
        />
    );
};

export default SEO;
