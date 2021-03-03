import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import {FC} from 'react';

import style from './Background.module.scss';

export const Background: FC = ({children}) => {
    const {background} = useStaticQuery<GatsbyTypes.BackgroundQuery>(graphql`
        query Background {
            background: file(relativePath: {eq: "background.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <BackgroundImage
            fluid={background!.childImageSharp!.fluid}
            className={style.main}
        >
            {children}
        </BackgroundImage>
    );
};
