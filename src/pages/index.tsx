import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {ResponsiveContainer} from '../components';
import {PageMeta} from '../containers';

import './style.scss';

const IndexPage: FC = () => {
    const {text} = useStaticQuery<GatsbyTypes.LoremIpsumQuery>(graphql`
        query LoremIpsum {
            text: file(relativePath: {eq: "lipsum.md"}) {
                childMarkdownRemark {
                    html
                }
            }
        }
    `);
    return (
        <ResponsiveContainer>
            <PageMeta />
            <section dangerouslySetInnerHTML={{__html: text?.childMarkdownRemark?.html ?? ''}} />
        </ResponsiveContainer>
    );
};

export default IndexPage;
