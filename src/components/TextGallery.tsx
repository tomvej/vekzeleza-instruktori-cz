import classNames from 'classnames';
import GatsbyImage, {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import style from './TextGallery.module.scss';

interface Props {
    image: FluidObject;
    alternate?: boolean;
}

export const TextGallery: FC<Props> = ({children, image, alternate = false}) => (
    <div className={classNames(style.main, {[style.alternate]: alternate})}>
        <div className={style.text}>
            {children}
        </div>
        <GatsbyImage
            fluid={image}
            className={style.image}
        />
    </div>
);
