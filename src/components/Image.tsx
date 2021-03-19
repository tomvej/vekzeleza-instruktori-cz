import GatsbyImage, {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import style from './Image.module.scss';

interface Props {
    src: FluidObject;
}

export const Image: FC<Props> = ({src}) => (
    <GatsbyImage
        fluid={src}
        className={style.main}
    />
);
