import GatsbyImage, {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import style from './Portrait.module.scss';

interface Props {
    src: FluidObject;
    title?: string;
}

export const Portrait: FC<Props> = ({src, title}) => (
    <GatsbyImage
        fluid={src}
        className={style.main}
        alt={title}
        title={title}
    />
);
