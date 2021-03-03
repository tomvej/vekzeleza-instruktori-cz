import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {FC} from 'react';

import {ResponsiveContainer} from './ResponsiveContainer';
import style from './Title.module.scss';

interface Props {

}

export const Title: FC<Props> = () => {
    const {background, text} = useStaticQuery<GatsbyTypes.TitleQuery>(graphql`
        query Title {
            background: file(relativePath: {eq: "title.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            text: site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    return (
        <header className={style.main}>
            <div className={style.container}>
                <ResponsiveContainer>
                    <h1 className={style.title}>{text!.siteMetadata!.title}</h1>
                    <h2 className={style.subtitle}>{text!.siteMetadata!.description}</h2>
                </ResponsiveContainer>
            </div>
            <div className={style.background}>
                <BackgroundImage
                    fluid={background!.childImageSharp!.fluid}
                    className={style.image}
                />
            </div>
        </header>
    );
};
