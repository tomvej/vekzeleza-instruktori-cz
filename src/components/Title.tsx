import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {FC, ReactNode} from 'react';

import {ResponsiveContainer} from './ResponsiveContainer';
import style from './Title.module.scss';

interface Props {
    title: ReactNode;
    subtitle: ReactNode;
}

export const Title: FC<Props> = ({title, subtitle, children}) => {
    const {background} = useStaticQuery<GatsbyTypes.TitleBackgroundQuery>(graphql`
        query TitleBackground {
            background: file(relativePath: {eq: "title.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <header className={style.main}>
            <div className={style.container}>
                <ResponsiveContainer>
                    <h1 className={style.title}>{title}</h1>
                    <h2 className={style.subtitle}>{subtitle}</h2>
                    {children}
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
